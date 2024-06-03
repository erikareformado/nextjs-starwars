import Image from 'next/image';

const Header = ({bgColor}) => {
    return (
        <header className={` top-0 z-50 w-full ${bgColor}`}>
            <Image
                className="invert-[100%] m-auto"
                src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
                alt="logo"
                width={200}
                height={200}
            />
        </header>

    )
}

export default Header