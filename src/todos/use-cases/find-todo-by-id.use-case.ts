import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByRepository } from "../repositorio";

@Injectable()
export class FindTodoByIdUseCase {
    constructor(
        private readonly repository: FindTodoByRepository,
        private readonly logger: Logger,
    ) { }

    async execute(id: string) {
        try {
            this.logger.log(`Finding toDo with id: ${id}...`);
            const todo = await this.repository.findById(id);
            if (!todo) {
                throw new Error('ToDo not found');
            }
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error(error.message || 'Failed to find toDo');
        }
    }
}