import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoByID {
    constructor(private readonly prisma: PrismaService){}

    async update(id: string, data: UpdateTodoDto){  
        return await this.prisma.todo.update({where: {id}, data }); 
    }
}