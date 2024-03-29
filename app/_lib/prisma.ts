import { PrismaClient } from "@prisma/client";

//inicializa o prisma e previne abrir varias conexões com bando quando em dev
declare global{
    var cachePrisma: PrismaClient;
}

let prisma: PrismaClient

if(process.env.NODE_ENV == "production"){
    prisma = new PrismaClient();
}else{
    if(!global.cachePrisma) {
        global.cachePrisma = new PrismaClient();
    }
    prisma = global.cachePrisma;
}

export const db = prisma;