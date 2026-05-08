import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoUseCase, FindAllTodosUseCase, FindTodoByIdUseCase, UpdateTodoUseCase, DeleteTodoUseCase } from './use-cases';

@Injectable()
export class TodosService {
  constructor(
    private readonly findAllTodoUseCase: FindAllTodosUseCase,
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findOneTodoUseCase: FindTodoByIdUseCase,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    private readonly removeTodoUseCase: DeleteTodoUseCase,
      
  ){}

  create(data: CreateTodoDto) {
    return this.createTodoUseCase.execute(data);
  }

  findAll() {
    return this.findAllTodoUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneTodoUseCase.execute(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(id , updateTodoDto );
  }

  remove(id: string) {
    return this.removeTodoUseCase.execute(id);
  }
}
