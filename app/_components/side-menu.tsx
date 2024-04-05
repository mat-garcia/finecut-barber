"use client"
import { SheetHeader, SheetTitle} from "./ui/sheet";
import { CalendarCheckIcon, HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession, signOut, signIn } from "next-auth/react";

const SideMenu = () => {
    const {data} = useSession();

    const handleLogoutClick = () => signOut();
    const handleLoginClick = () => signIn('google')
    return ( 
        <>
            <SheetHeader className="text-left border-b borrder-solid border-secondar p-5">
                    Menu
                <SheetTitle>
                </SheetTitle>
            </SheetHeader>

            {data?.user ? (
                <div className="flex justify-between px-5 py-6 items-center">
                    <div className="flex items-center gap-3 ">
                        <Avatar>
                            <AvatarImage src={data.user.image ?? ''}/>
                        </Avatar>
                        <h2 className="font-bold">{data.user?.name}</h2>
                    </div>
                    <Button variant="secondary" size="icon" onClick={handleLogoutClick}>
                        <LogOutIcon/>
                    </Button>
                </div>
            ): (
                <div className="flex flex-col gap-3 px-5 py-6">
                    <div className="flex items-center gap-2 ">
                        <UserIcon size={28}/>
                        <h2 className="font-bold">Olá, faça seu Login!.</h2>
                    </div>
                    <Button variant="secondary" className="w-full text-primary justify-start" onClick={handleLoginClick}>
                        <LogInIcon className="mr-2" size={18}/>
                         Fazer Login
                    </Button>
                </div>
            )}

            <div className="flex flex-col gap-3 px-5">
                <Button variant="outline" className="justify-start" asChild>
                    <Link href="/">
                        <HomeIcon className="mr-2" size={18}/>
                        Inicio 
                    </Link>
                 </Button>
                {data?.user && (
                    <Button variant="outline" className="justify-start" asChild>
                         <Link href="/bookings">
                            <CalendarCheckIcon className="mr-2" size={18} /> 
                            Agendamentos 
                        </Link>
                    </Button>
                )}
            </div>
        </>
     );
}
 
export default SideMenu;