import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoRepository, FindAllTodoRepository } from './repositorio';
import { find } from 'rxjs';
import { create } from 'node:domain';
import { FindAllTodosUseCase } from './use-cases/find-all-todo.use-case';
import { CreateTodoUseCase } from './use-cases/create-todo.use-case';

@Injectable()
export class TodosService {
  constructor(
    private readonly findAllTodoUseCase: FindAllTodosUseCase,
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findOneTodoUseCase: FindAllTodosUseCase,
    private readonly updateTodoUseCase: CreateTodoUseCase,
    private readonly removeTodoUseCase: CreateTodoUseCase,
      
  ){}

  create(data: CreateTodoDto) {
    return this.createTodoUseCase.execute(data);
  }

  findAll(findAllTodoDto) {
    return this.findAllTodoUseCase.execute();
  }

  findOne(findOneTodoDto) {
    return this.findOneTodoUseCase.execute(findOneTodoDto);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(updateTodoDto);
  }

  remove(id: number) {
    return this.removeTodoUseCase.execute (id);
  }
}
