import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";

//  
@Injectable()
export class FindTodoByRepository{
    constructor (private readonly prisma: PrismaService){}

    async findById(id: String){
        return await this.prisma.todo.findUnique({
            where:{id}
        });
    }
}