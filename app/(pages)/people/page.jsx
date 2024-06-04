
'use client'
import ProtectedRoute from "@/app/hooks/ProtectedRoute.jsx";

import CardButton from "@/app/components/CardButton.jsx"
import PreviousButton from "@/app/components/PreviousButton";
import NextButton from "@/app/components/NextButton";
import Loader from "@/app/components/Loader.jsx";

import filterByName from "@/app/helpers/filterByName.js";

import { useApplication } from "../../context/ApplicationContext.jsx"
import { useEffect, useState } from "react"

const People = () => {
    const [peopleData, setPeopleData] = useState([])
    const [currentUrl, setCurrentUrl] = useState(`${process.env.NEXT_PUBLIC_API_URL}/people`)
    const [paginationUrl, setPaginationUrl] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const {txtSearch, setActiveApi, activeApi, characters, setCharacters }= useApplication()
    
    useEffect(()=> {
      const getAllCharacters = async() => {
        try { 
            const allCharacters = await fetch(
            `${process.env.NEXT_PUBLIC_AKABAB_API_URL}/all.json`
            ).then((res) => res.json());
            setCharacters(allCharacters)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
  
      getAllCharacters();
    },[])
 

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setActiveApi('people')
            try {
                let route = currentUrl
                if(txtSearch !== '' & txtSearch.length > 1){
                    route = `${process.env.NEXT_PUBLIC_API_URL}/${activeApi}?search=${txtSearch}`
                }
                const response = await fetch(`${route}`);
                const data = await response.json();
                setPeopleData(data.results)
                let pagination = {
                    previous: data.previous,
                    next: data.next
                }
                setPaginationUrl(pagination)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false)
            }
        };

        fetchData();
    }, [currentUrl, txtSearch]);

  

    const onPreviousUrl = () => {
        setCurrentUrl(paginationUrl.previous)
    }

    const onNextUrl = () => {
        setCurrentUrl(paginationUrl.next)
    }

    return (
        <ProtectedRoute>
            <main className="p-8 relative flex justify-center">
                {
                    isLoading=== true ?   <Loader/>
                    : 
                    <div>
                        {
                            peopleData.length > 0 ?
                                <div>
                                    <PreviousButton 
                                    isDisabled={paginationUrl.previous === null}
                                    onPrevious={onPreviousUrl}
                                    />
                                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 content-center w-fit">
                                        {
                                            
                                            peopleData.map((people, index) => {
                                                return (
                                                    filterByName(people.name, characters).map((character, index )=> {
                                                        return (
                                                            <CardButton key={index}
                                                            name={people.name}
                                                            image={character.image}
                                                            />
                                                            
                                                            )
                                                        })
                                                )
                                            })
                                        }
                                    </div>
                                    <NextButton
                                    isDisabled={paginationUrl.next === null}
                                    onNextUrl={onNextUrl}
                                    />    
                                </div>
                            : 
                            <div className="flex item-center justify-center h-full">
                                <p className="text-white text-center">
                                    No available data
                                </p>
                            </div> 
                        }
            
                        

                    </div>
                }

              
            </main>
            
            
        </ProtectedRoute>
    
   
    )
}

export default People