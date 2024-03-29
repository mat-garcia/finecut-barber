import { User2, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col  w-[70%] gap-3 py-5">
                    <Badge className="w-fit bg-[#221C30] text-primary hover:bg-[#221C30]"> Confirmado</Badge>
                    <h2 className="font-bold text-lg">Corte de Cabelo</h2>
                    <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://utfs.io/f/f5aceb36-2ffc-4351-910b-c6e9ef4c280b-rd6c1c.jpg"/>
                            <AvatarFallback><User2/></AvatarFallback>
                        </Avatar>

                        <h3 className="">Barberia Rasphatudo</h3>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] items-center justify-center border-l border-solid border-secondary">
                    <p className="text-sm">Mês</p>
                    <p className="text-2xl">06</p>
                    <p className="text-sm">09:55</p>

                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookingItem;