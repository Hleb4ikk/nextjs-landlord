import { UserProvider } from "@/contexts/user/user-context";
import Header from "../../components/SelfUI/header/header";
import Footer from "@/components/SelfUI/footer/footer";
import { getUser } from "@/data/user";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <main className="min-h-screen">
      <UserProvider user={user}>
        <Header />
        <div className="max-w-[1440px] mr-auto ml-auto mt-10 pr-3 pl-3 md:pl-10 md:pr-10">
          {children}
        </div>
        <Footer />
      </UserProvider>
    </main>
  );
}
