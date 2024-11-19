'use client'

import Header from "../../components/SelfUI/header/header";
import Footer from "@/components/SelfUI/footer/footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header/>
        <div className="pr-3 pl-3 md:pl-10 md:pr-10">{children}</div>
      <Footer/> 
    </div>
  );
}
