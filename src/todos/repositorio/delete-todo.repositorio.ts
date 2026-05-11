import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class DeleteTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    // Prisma client types are generated dynamically; eslint cannot fully infer this chain.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.todo.delete({
      where: { id },
    });
  }
}
