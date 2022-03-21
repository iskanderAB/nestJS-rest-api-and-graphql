import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private Tasks: TasksService){}
    @Get()
    getAllTasks(){
        return this.Tasks.getAllTasks()
    }
}
