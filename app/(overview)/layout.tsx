import { getUser } from "@/data/user";
import Header from "../../components/SelfUI/header/header";
import Footer from "@/components/SelfUI/footer/footer"

export default async function Layout({ children }: { children: React.ReactNode }) {
  
  const user = await getUser();

  console.log("Layout:" + user?.username);

  return (
    <div className="min-h-screen">
      <Header user = {user}/>
        <div className="pr-3 pl-3 md:pl-10 md:pr-10">{children}</div>
      <Footer/> 
    </div>
  );
}