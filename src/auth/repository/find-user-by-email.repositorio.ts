import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";

@Injectable() 
export class FindUserByEmailRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findByEmail(email: string) {
        return await this.prisma.user.findUnique({
            where:{
                email,
            }
        });
    }
}