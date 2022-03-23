import { Injectable } from '@nestjs/common';
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
        return this.tasks.find(v => v.id === id);
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
        if (this.tasks.find(v => v.id === id)){
            this.tasks = this.tasks.filter(v =>v.id !== id)
            return "item deleted with succes";
        }
        return "item already not found"
            
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
