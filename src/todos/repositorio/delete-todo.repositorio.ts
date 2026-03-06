import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";
import { CreateTodoDto } from "../dto/create-todo.dto";
//  
@Injectable()
export class DeleteTodoRepository{
    constructor (private readonly prisma: PrismaService){}

    async delete (data: DeleteTodoDto){
        return await this.prisma.todo.delete({data})
    }
}