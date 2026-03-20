import { Inject, Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repositorio";
@Injectable()
export class DeleteTodoUseCase {
    constructor(
        private readonly repository: DeleteTodoRepository, // Ajuste o nome do repositório se necessário
        private readonly logger: Logger,
    ) { }

    async execute( id: string) {
        try {
            this.logger.log(`Deleting toDo with id: ${id}...`);
            await this.repository.delete(id);
            this.logger.log('ToDo deleted successfully');
            return { success: true };
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to delete toDo');
        }
    }
}