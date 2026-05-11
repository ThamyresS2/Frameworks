import { TodoPriority } from '@prisma/client';

export class CreateTodoDto {
  title: string;
  description?: string;
  completed?: boolean;
  priority?: TodoPriority;
  dueAt?: Date;
  completedAt?: Date;
  userId: string;
}
