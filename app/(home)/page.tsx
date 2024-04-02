import {format} from 'date-fns';
import Header from "../_components/header";
import { ptBR } from 'date-fns/locale';
import Search from './_components/search';
import BookingItem from '../_components/booking-item';
import BarbershopItem from './_components/barbershop-item';
import { db } from '../_lib/prisma';

// Embaralha o array usando o algoritmo de Fisher-Yates
function shuffleArray(populares: any) {
  for (let i = populares.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [populares[i], populares[j]] = [populares[j], populares[i]];
  }
  return populares;
}

export default async function Home() {
  //buscar barbearias
  const barbershops = await db.barberShop.findMany({})
  
  //gera a section populares de forma randomica
  const populares = await db.barberShop.findMany({})
  const shuffledBarbershops = shuffleArray(populares);
  const randomBarbershops = shuffledBarbershops.slice(0, 3);
  return (
    <main className="">
      <Header></Header>

      {/* wellcome */}
      <div className="px-5 pt-5">
        <h2 className='text-xl font-bold'>Olá, User!</h2>
        <p className='text-sm'>
          {format(new Date(), "EEEE', ' dd ' de' MMMM '",{locale: ptBR })}
        </p>
      </div>

      <div className='px-5 mt-6'>
        <Search/>
      </div>

      <div className='px-5 mt-6'>
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          Agendamentos
        </h2>
        <BookingItem/>
      </div>
      <div className='mt-6'>
        <h2 className="text-xs px-5 mb-3 uppercase text-gray-400 font-bold">
          Recomendados
        </h2>
          <div className='flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
            {
            barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
            ))
            }
          </div>
      </div>
      <div className='mt-6 mb-[4.5rem]'>
        <h2 className="text-xs px-5 mb-3 uppercase text-gray-400 font-bold">
         Populares
        </h2>
          <div className='flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
            {
            randomBarbershops.map((randonbarbershop: any) => (
              <BarbershopItem key={randonbarbershop.id} barbershop={randonbarbershop}/>
            ))
            }
          </div>
      </div>

    </main>
  );
}
