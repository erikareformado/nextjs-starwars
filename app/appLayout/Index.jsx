import Header from '@/app/components/Header.jsx';
import Navbar from "@/app/components/Navbar";

const AppLayout = ({children}) => {
    return (
        <>
            <Header bgColor={'bg-black'}/>
            <Navbar/>
            {children}
        </>
    )   
}

export default AppLayout
