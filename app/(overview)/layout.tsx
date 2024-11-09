'use client'

import { useEffect, useState } from "react";
import Header from "../../components/SelfUI/header/header";
import Footer from "@/components/SelfUI/footer/footer"

export default function Layout({ children }: { children: React.ReactNode }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="min-h-screen">
      <Header isMobile={isMobile}/>
      <div className="">{children}</div>
      <Footer isMobile={isMobile}/>
    </div>
  );
}
