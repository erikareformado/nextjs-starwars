
const Loader = () => {
    return (
        <div className="w-full  h-screen">
            <div className="flex flex-col mt-20 items-center justify-center">
              <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="8" r="8" fill="#FDE047"/>
                <circle cx="40" cy="72" r="8" fill="#FDE047"/>
                <circle cx="72" cy="40" r="8" fill="#FDE047"/>
                <circle cx="8" cy="40" r="8" fill="#FDE047"/>
              </svg>
            </div>
        </div>
          
    )
  }
  
  export default Loader
  