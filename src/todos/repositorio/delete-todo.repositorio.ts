import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";

@Injectable()
export class DeleteTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async delete(data: { id: string }) {
    return await this.prisma.todo.delete({
      where: data
    });
  }
}