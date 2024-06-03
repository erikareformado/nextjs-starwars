
import { useApplication } from "../context/ApplicationContext"

const SearchInput = () => {

    const {txtSearch, setTxtSearch} = useApplication()
    return (
        <div className="flex p-1 items-center border border-white w-62 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="15px" width="15px" viewBox="0 0 20 20" version="1.1">
                <path d="M16.032,14.618 L19.707,18.293 C19.9595868,18.5455868 20.0582332,18.91374 19.96578,19.25878 C19.8733268,19.6038199 19.6038199,19.8733268 19.25878,19.96578 C18.91374,20.0582332 18.5455868,19.9595868 18.293,19.707 L14.618,16.032 C13.0242976,17.309006 11.0422097,18.0033365 9,18 C4.029,18 0,13.971 0,9 C0,4.029 4.029,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18.0033365,11.0422097 17.309006,13.0242976 16.032,14.618 Z M14.041,13.856 C16.7054013,11.0901005 16.643778,6.69396398 13.9028963,4.00383353 C11.1620145,1.31370309 6.76549412,1.33424478 4.04986945,4.04986945 C1.33424478,6.76549412 1.31370309,11.1620145 4.00383353,13.9028963 C6.69396398,16.643778 11.0901005,16.7054013 13.856,14.041 C13.882,14.007 13.911,13.974 13.943,13.943 C13.975,13.912 14.007,13.883 14.041,13.856 Z" id="Icon-Search" fill="#999" fillRule="nonzero"/>
            </svg>
            <input 
                className="bg-black ml-2 w-full outline-none border-none text-white"
                type="text" 
                placeholder="Search star wars" 
                value={txtSearch} 
                onChange={(e)=> setTxtSearch(e.target.value)} 
            />
        </div>
    )
}

export default SearchInput