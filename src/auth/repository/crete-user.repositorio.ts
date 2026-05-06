import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";

type CreateUserParams = {
    name?: string;
    email: string;
    passwordHash: string;
};

@Injectable()
export class CreateUserRepository{ 
    constructor(private readonly prisma: PrismaService) {}
    async create(data: CreateUserParams){
        return await this.prisma.user.create({
            data,
            // SELECIONA OQUE QUER TRAZER DEPOIS DE CRIAR O USUÁRIO, SE NÃO COLOCAR ELE TRAZ TUDO
            select: {
                id: true,
                name: true,
                email: true,    
            }
        });
    }
    
}