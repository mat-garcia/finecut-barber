
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import SideMenu from "./side-menu";

const Header = () => {
    

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
                        <SideMenu/>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;