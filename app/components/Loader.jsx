import Image from "next/image"

const Loader = () => {
    console.log('load')
    return (
          <>
          <div className="flex flex-col items-center justify-center">
          <Image
                className="invert-[100%] m-auto"
                src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
                alt="logo"
                width={200}
                height={200}
            />
            <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="8" r="8" fill="#FDE047"/>
              <circle cx="40" cy="72" r="8" fill="#FDE047"/>
              <circle cx="72" cy="40" r="8" fill="#FDE047"/>
              <circle cx="8" cy="40" r="8" fill="#FDE047"/>
            </svg>
          </div>
  
          </>
    )
  }
  
  export default Loader
  