'use client'

import { useEffect, useState } from "react";
import Header from "../../components/SelfUI/header/header";
import Footer from "@/components/SelfUI/footer/footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  
  const [width, setWidth] = useState(768);

  useEffect(() =>{

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="min-h-screen">
      <Header width={width}/>
      <div className="pr-3 pl-3 md:pl-10 md:pr-10">{children}</div>
      <Footer width={width}/>
    </div>
  );
}
