import { Injectable, NotFoundException } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid  } from 'uuid';

@Injectable()
export class TasksService {
    private tasks:Task[] = [
        {
            id: '10',
            description: 'hello iskander',
            title: 'iskander',
            status: TaskStatus.OPEN
        },
        {
            id: '10',
            description: 'hello iskander',
            title: 'iskander',
            status: TaskStatus.OPEN
        },
        {
            id: '10',
            description: 'hello iskander',
            title: 'iskander',
            status: TaskStatus.OPEN
        }
    ]
    
    getAllTasks(){
        return this.tasks;
    }

    getTaskById(id: string): Task|undefined{
        const found = this.tasks.find(v => v.id === id) ; 
        if (!found)
            throw new NotFoundException(`item with id ${id} not found `); 
        return found;
    }

    createTask(createTaskDto: createTaskDto): Task{
        const {title ,description} = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(task)
        return task;
    }

    deleteTask(id: string): string{
        const found = this.getTaskById(id) ; 
        this.tasks = this.tasks.filter(v =>v.id !== found.id)
        return "item deleted with succes";
    }

    updateTaskStatus(id: string,status: TaskStatus): Task|string{
        for(const task of this.tasks) { 
            if (task.id === id){
                task.status = status;
                return task;
            }
        }
        return "item not found !"
    }


}
