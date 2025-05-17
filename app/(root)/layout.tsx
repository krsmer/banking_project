import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: "Arif", lastName:"Özer" };
  return (
    <main className="flex h-screen w-full font-inter ">
        <SideBar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="flex h-8 items-center justify-between p-5 shadow sm:p-8 md:hidden">
            <Image
            src="/icons/logo.svg"
            alt="Horizon logo"
            width={30}  
            height={30}
            />
            <div>
              <MobileNavbar user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
    
    </main>
  );
}
