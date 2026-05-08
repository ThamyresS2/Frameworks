import { Injectable } from "@nestjs/common";

import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";
//  
@Injectable()
export class CreateTodoRepository{
    constructor (private readonly prisma: PrismaService){}

    // In create-todo.repositorio.ts
async create(data: CreateTodoDto) {
  return await this.prisma.todo.create({
    data: {
      title: data.title,
      description: data.description,
      completed: data.completed,
      priority: data.priority,
      dueAt: data.dueAt,
      // Use the scalar field name defined in your schema.prisma
      userId: data.userId, 
    }
  });
}
}
