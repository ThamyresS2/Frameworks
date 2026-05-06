import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoRepository, FindAllTodoRepository } from './repositorio';
import { find } from 'rxjs';
import { create } from 'node:domain';

@Injectable()
export class TodosService {
  constructor(
    private readonly findAllTodoRepository: FindAllTodoRepository,
    private readonly createTodoRepository: CreateTodoRepository,
    private readonly findOneTodoRepository: FindAllTodoRepository,
    private readonly updateTodoRepository: CreateTodoRepository,
    private readonly removeTodoRepository: CreateTodoRepository,
       
  ){}

  create(data: CreateTodoDto) {
    return this.createTodoRepository.create(data);
  }

  findAll(findAllTodoDto) {
    return this.findAllTodoRepository.findAll();
  }

  findOne(findOneTodoDto) {
    return this.findOneTodoRepository.findOne();
  }

  update(UpdateTodoDto: number, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoRepository.update(updateTodoDto);
  }

  remove(id: number) {
    return this.removeTodoRepository.remove(id);
  }
}
