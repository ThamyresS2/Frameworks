import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";

//  
@Injectable()
export class FindAllTodoRepository{
    constructor (private readonly prisma: PrismaService){}

    async findAll(){
        return await this.prisma.todo.findMany();
    }
}