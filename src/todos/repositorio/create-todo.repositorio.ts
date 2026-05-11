import { Injectable } from '@nestjs/common';

import { CreateTodoDto } from '../dto/create-todo.dto';
import { PrismaService } from 'src/shared/databases/prisma.database';
//
@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTodoDto) {
    // Prisma client types are generated dynamically; eslint cannot fully infer this chain.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.todo.create({
      data,
    });
  }
}
