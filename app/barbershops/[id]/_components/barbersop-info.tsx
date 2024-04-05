"use client"
import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/app/_components/ui/sheet";
import { BarberShop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps{
    barbershop: BarberShop
}

const BarbershopInfo = ({barbershop}:BarbershopInfoProps) => {
    const router = useRouter();

    const handleBackclick = () => {
        router.back()
    }
    return (  <div>
        <div className="h-[250px] w-full relative">
            <Button onClick={handleBackclick} variant={"outline"} size="icon" className="z-50 absolute top-4 left-4">
                <ChevronLeftIcon/>
            </Button>
           
            <Sheet>
                {/* asChild para usar o button dentro como gatilho */}
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="z-50 absolute top-4 right-4">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent className="p-0">
                    <SideMenu/>
                </SheetContent>
            </Sheet>
            <div className="absolute bg-gradient-to-t from-background to-transparent z-40 bottom-0 w-full h-24"></div>
            <Image className="opacity-75"
            src={barbershop.imageUrl} fill alt={barbershop.name} 
            style={{objectFit: "cover"}}/>
        </div>

        <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary ">
            <h1 className="text-xl font-bold">{barbershop.name}</h1>
            <div className="flex items-center gap-1 mt-2">
                <MapPinIcon className="text-primary stroke-background fill-primary" size={18}/>
                <p className="text-sm ">{barbershop.address}</p>
            </div>
            <div className="flex items-center gap-1 mt-2">
                <StarIcon className="text-primary fill-primary" size={18}/>
                <p className="text-sm ">{"5,0 (572 avaliações)"}</p>
            </div>
        </div>
    </div> );
}
 
export default BarbershopInfo;