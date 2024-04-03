
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbersop-info";
import ServiceItem from "./_components/service-item";


interface BarbershhopDetailsPageProps{
    params: any
    id?: string
}

const BarbershopDetailsPage = async ({params}:BarbershhopDetailsPageProps) => {
    if (!params.id) {
        // TODO: redirecopmar para home page
        return null
    }
    const barbershop = await db.barberShop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            Service: true
        },
    })

    if (!barbershop) {
        return null
    }

    return ( 
        <div>
            <BarbershopInfo barbershop={barbershop}/>

            <div className="px-5 py-6 flex flex-col gap-4">
                {barbershop.Service.map( service => (
                    
                    <ServiceItem key={service.id} service={service}/>
                ))}
            </div>
       </div>
     );
}
 
export default BarbershopDetailsPage;