import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './tasks-status.enum';
import { Task } from './tasks.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository, //TODO: test it in custom repository "TasksRepository"
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({where: {id}});      
        if (!task)
            throw new NotFoundException(`item with id ${id} not found `);
        return task;
  }

  async createTask(createTaskDto: createTaskDto): Promise<Task>{
      const {title ,description} = createTaskDto;
      const task = this.tasksRepository.create({
          title,
          description,
          status: TaskStatus.OPEN
      })
      await this.tasksRepository.save(task);
      return task;
  }

  async deleteTask(id: string): Promise<string>{
      try{
        await this.tasksRepository.delete(id);
        return "item deleted with succes";
      }
      catch(error){
        throw new NotFoundException(`item ${id} not found`)
      }
      
  }

  async updateTaskStatus(id: string,status: TaskStatus): Promise<Task|string>{
      const task = await this.getTaskById(id);

      if (!task)
        throw new NotFoundException('item not found');

      task.status = status;
      this.tasksRepository.save(task);
      return task
        
  }
}
