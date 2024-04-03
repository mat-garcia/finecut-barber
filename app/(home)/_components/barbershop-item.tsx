"use client"

import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent } from "@/app/_components/ui/card";
import {BarberShop} from "@prisma/client"
import {StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopProps {
    barbershop: BarberShop;
}

const BarbershopItem = ({barbershop}: BarbershopProps) => {
    const router = useRouter();
    const handleBookingClick = () => {
        router.push(`/barbershops/${barbershop.id}`)
    }
    return ( 

           <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
                <CardContent className="px-1 py-0 pt-1">
                    {/* setei a div pai com relattive para usar w-full e objectfit cover
                    para imagem nao ficar estranha na tela*/}
                    <div className="relative w-full h-[159px]">
                        <div className="absolute top-2 left-2 z-50">
                            <Badge variant="secondary" className="flex gap-2 opacity-80 items-center ">
                                <StarIcon size={14} className="fill-primary text-primary"/>
                                <span className="text-sm">5,0</span>
                            </Badge>
                        </div>
                        <Image 
                            alt={barbershop.name} src={barbershop.imageUrl}
                            height={0} width={0} fill sizes="100vh"
                            className="w-full rounded-2xl"
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                        
                    <div className="px-3 pb-3">
                       {/*utilizei overflow, ellipsis e nowrap para evitar quebras de linha no card */}
                        <h2 className="mt-2 font-bold overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                        <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                        <Button variant="secondary" className="mt-3 w-full" onClick={handleBookingClick}>Reservar</Button>
                    </div>

                </CardContent>
           </Card>
     );
}
 
export default BarbershopItem;