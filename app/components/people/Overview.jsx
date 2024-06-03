'use client'
import { useApplication } from "@/app/context/ApplicationContext"
import filterByName from "@/app/helpers/filterByName"
import { useEffect, useState } from "react"

const Overview = ({activeCharacter}) => {
    const {characters, setCharacters} = useApplication()
    const [activePeople, setActivePeople] = useState({})

    useEffect(() => {
        const getAllCharacters = async() => {
            const allCharacters = await fetch(
              `${process.env.NEXT_PUBLIC_AKABAB_API_URL}/all.json`
            ).then((res) => res.json());
            setCharacters(allCharacters)
            addActivePeople(allCharacters);
          };
         
          getAllCharacters();
         
    }, [characters.length > 0])

    const addActivePeople = (character) => {
        const filterCharacter = filterByName(activeCharacter, character);
        const details = filterCharacter[0]
        setActivePeople(details)
    }

    return (
        <section id="overview" className="flex justify-center">
            <div className="rounded-lg border-none max-w-4xl">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                     {/* Character Image */}
                    <img src={activePeople.image}
                    className="sm:w-full sm:h-[400px] w-[150px] h-[250px] rounded-md"
                    alt={activeCharacter}
                    />
                    <div className="md:pl-40 sm:pl-20 w-full mt-5">
                        <h1 className="text-white text-4xl text-center capitalize font-semibold">
                            {activeCharacter }
                        </h1>  
                        <h2 className="text-2xl text-center capitalize text-yellow-300">
                            <span>{activePeople.species}</span> - <span>{activePeople.homeworld}</span>
                        </h2>
                        {/* Overview Details */}
                        <div className="border-white border-b py-5 ">
                            <h4 className="text-white capitalize text-yellow-300 font-medium text-lg">Overview</h4>
                            <div className="grid grid-cols-2 content-center gap-1 text-sm mt-4">
                                <label htmlFor="birth-year" className="text-white" >Birth year</label>
                                <p id="birth-year" className="capitalize text-yellow-300">{activePeople.born}</p>
                                <label htmlFor="gender" className="text-white" >Gender</label>
                                <p id="gender" className="capitalize text-yellow-300">{activePeople.gender}</p>
                                <label htmlFor="gender" className="text-white">Age Died</label>
                                <p id="gender" className="capitalize text-yellow-300">{activePeople.died}</p>              
                            </div>
                        </div>
                         {/* Apperance Details */}
                        <div className="border-white py-5 ">
                            <h4 className="text-white capitalize text-yellow-300 font-medium text-lg">Appearance</h4>
                            <div className="grid grid-cols-2 content-center gap-1 text-sm mt-4">
                                <label className="text-white" htmlFor="height">Height</label>
                                <p id="height" className="capitalize text-yellow-300">{activePeople.height}</p>
                                <label className="text-white" htmlFor="mass">Mass</label>
                                <p id="mass" className="capitalize text-yellow-300">{activePeople.mass}</p>
                                <label className="text-white" htmlFor="hair-color">Hair Color</label>
                                <p id="hair-color" className="capitalize text-yellow-300">{activePeople.hairColor}</p>
                                <label className="text-white" htmlFor="eye-color">Eye Color</label>
                                <p id="eye-color" className="capitalize text-yellow-300">{activePeople.eyeColor}</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview