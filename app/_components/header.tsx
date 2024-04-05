"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarCheckIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
    const {data, status} = useSession();

    const handleLogoutClick = () => signOut();
    const handleLoginClick = () => signIn('google')

    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                {/* <h1 className="text-8xl p-4 font-thin"> FINE<b className="font-medium text-primary">CUT</b></h1> */}
                <Image src="/logo.png" alt="Fine Cut" height={22} width={120}/>

                <Sheet>
                    {/* asChild para usar o button dentro como gatilho */}
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon"> <MenuIcon size={18}/> </Button>
                    </SheetTrigger>
                    <SheetContent className="p-0">
                        <SheetHeader className="text-left border-b borrder-solid border-secondar p-5">
                            <SheetTitle>
                                Menu
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
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;