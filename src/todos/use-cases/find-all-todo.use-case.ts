import { Inject, Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository } from "../repositorio";


@Injectable()
export class FindAllTodosUseCase {
    constructor(
        private readonly repository: FindAllTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute() {
        try {
            this.logger.log('Fetching all toDos...');
            const todos = await this.repository.findAll();
            return todos;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to fetch toDos');
        }
    }
}