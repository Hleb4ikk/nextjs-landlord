import { UserProvider } from "@/contexts/user/user-context";
import Header from "../../components/SelfUI/header/header";
import Footer from "@/components/SelfUI/footer/footer";
import { getSessionUser } from "@/data/user";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();

  return (
    <main>
      <UserProvider user={user}>
        <Header/>
        <div className="h-screen">
          {children}
        </div>
        <Footer />
      </UserProvider>
    </main>
  );
}
