
'use client'
import ProtectedRoute from "@/app/hooks/ProtectedRoute.jsx";

import CardButton from "@/app/components/CardButton.jsx"
import PreviousButton from "@/app/components/PreviousButton";
import NextButton from "@/app/components/NextButton";
import Loader from "@/app/components/Loader.jsx";

import filterByName from "@/app/helpers/filterByName.js";

import { useApplication } from "../../context/ApplicationContext.jsx"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';


const People = () => {
    const [peopleData, setPeopleData] = useState(null)
    const [currentUrl, setCurrentUrl] = useState(`${process.env.NEXT_PUBLIC_API_URL}/people`)
    const [paginationUrl, setPaginationUrl] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { push } = useRouter();
    const {txtSearch, setActiveApi, activeApi, characters, setCharacters }= useApplication()
    
    useEffect(()=> {
      const getAllCharacters = async() => {
        setIsLoading(true)
        try { 
            const allCharacters = await fetch(
            `${process.env.NEXT_PUBLIC_AKABAB_API_URL}/all.json`
            ).then((res) => res.json());
            setCharacters(allCharacters)
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false)
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
               console.log(data)
              
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
            {
                isLoading=== true ?   <Loader/>
                : <main className="p-8 relative flex justify-center">
                <PreviousButton 
                isDisabled={paginationUrl.previous === null}
                onPrevious={onPreviousUrl}
                />
    
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 content-center w-fit">
                    {
                        peopleData ?
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
                        
                        : 'No available data'
                    }
                </div>
                <NextButton
                isDisabled={paginationUrl.next === null}
                onNextUrl={onNextUrl}
                />
              
            </main>
            }
            
        </ProtectedRoute>
    
   
    )
}

export default People