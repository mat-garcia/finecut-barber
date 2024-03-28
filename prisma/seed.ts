const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {

    try {
        const images = [
            "https://utfs.io/f/3b8156c8-9bb2-439c-b1e8-958d61758ee9-g8wpkw.jpg",
            "https://utfs.io/f/f5aceb36-2ffc-4351-910b-c6e9ef4c280b-rd6c1c.jpg",
            "https://utfs.io/f/eb4a2702-da8f-44cb-a92b-59dbe35aba79-hdfn1o.jpg",
            "https://utfs.io/f/492d79d0-4368-4908-ac47-e07ea2240a57-3v0fyz.jpg",
            "https://utfs.io/f/51d50259-3a29-48bc-be67-e31aed72eeae-jsgpt7.jpg"
        ]
        const creativeNames = [
            "HighLand Barber",
            "Barbearia RasphaTudo",
            "Barbearia Cut&Beer",
            "Barbearia Oficina do Corte",
            "Xilindrovsk Barber"
        ]

        const addresses = [
            "Rua Inglaterra, 123",
            "Rua Carecas , 1999",
            "Praça Butecos, 8",
            "Travessa Motoca , 99",
            "Avenida Mendingo, 15"
        ]

        const services = [
            {
                name: "Corte de Cabelo",
                description: "Um tapa no vizual",
                price: 35.0,
                imageUrl: "https://th.bing.com/th/id/R.6d32c17b782c24b2653c379e2270e75e?rik=Y09qsUDpsK91zw&riu=http%3a%2f%2fwww.obarbeiro.com.br%2fwp-content%2fuploads%2f2014%2f03%2fcareca-capa-460x259.88700565.jpg&ehk=Rmw9vqDjMHJFCcCrRUCpanJbJkqGm477oqzn6BaFuvs%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                name: "Barba",
                description: "Rosto Lizinho ou bigode finin",
                price: 20.0,
                imageUrl: "https://th.bing.com/th/id/R.6d32c17b782c24b2653c379e2270e75e?rik=Y09qsUDpsK91zw&riu=http%3a%2f%2fwww.obarbeiro.com.br%2fwp-content%2fuploads%2f2014%2f03%2fcareca-capa-460x259.88700565.jpg&ehk=Rmw9vqDjMHJFCcCrRUCpanJbJkqGm477oqzn6BaFuvs%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                name: "Pézinho",
                description: "é o pezinho do cabelo não sua lancha",
                price: 10.0,
                imageUrl: "https://th.bing.com/th/id/R.6d32c17b782c24b2653c379e2270e75e?rik=Y09qsUDpsK91zw&riu=http%3a%2f%2fwww.obarbeiro.com.br%2fwp-content%2fuploads%2f2014%2f03%2fcareca-capa-460x259.88700565.jpg&ehk=Rmw9vqDjMHJFCcCrRUCpanJbJkqGm477oqzn6BaFuvs%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                name: "Sombrancelha",
                description: "Que tal arrancar essa taturana da testa?",
                price: 20.0,
                imageUrl: "https://th.bing.com/th/id/R.6d32c17b782c24b2653c379e2270e75e?rik=Y09qsUDpsK91zw&riu=http%3a%2f%2fwww.obarbeiro.com.br%2fwp-content%2fuploads%2f2014%2f03%2fcareca-capa-460x259.88700565.jpg&ehk=Rmw9vqDjMHJFCcCrRUCpanJbJkqGm477oqzn6BaFuvs%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                name: "Cabelo mais Barba",
                description: "De nada adianta arrumar o cabelo na regua e a barba parecer um gamba na cara.",
                price: 65.0,
                imageUrl: "https://th.bing.com/th/id/R.6d32c17b782c24b2653c379e2270e75e?rik=Y09qsUDpsK91zw&riu=http%3a%2f%2fwww.obarbeiro.com.br%2fwp-content%2fuploads%2f2014%2f03%2fcareca-capa-460x259.88700565.jpg&ehk=Rmw9vqDjMHJFCcCrRUCpanJbJkqGm477oqzn6BaFuvs%3d&risl=&pid=ImgRaw&r=0"
            }
        ]
        const barbershops = [];
        for (let i = 0; i < 5; i++) {
           const name = creativeNames[i];
           const address = addresses[i];
           const imageUrl = images[i];
            
           const barbershop = await prisma.barberShop.create({
            data: {
                name,
                address,
                imageUrl: imageUrl,
            },
           })

           for (const service of services){
            await prisma.service.create({
                data: {
                    name: service.name,
                    description: service.description,
                    price: service.price,
                    barbershop: {
                        connect: {
                            id: barbershop.id,
                        },
                    },
                },
            });
           }
           barbershops.push(barbershop);
        }
    } catch (error) {
        console.error('Erro ao popular o banco de dados:', error);
    } finally {
        await prisma.$disconnect();
    }
}
seedDatabase();