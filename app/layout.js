import { Inter } from "next/font/google";
import "./globals.css";

import NotifyContainer from "./components/Toastify/Container";
import { ApplicationProvider } from "./context/ApplicationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black"
      // style={{
      //   backgroundImage: `url(/assets/background.jpg)`,
      //   backgroundPosition: 'center'
      // }}
      >
      <ApplicationProvider>
        { children }
        <NotifyContainer/>
      </ApplicationProvider>
        
      </body>
    </html>
  );
}
