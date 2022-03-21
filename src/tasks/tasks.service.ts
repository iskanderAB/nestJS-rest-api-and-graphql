import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

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

}
