import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskStatus } from './dto/update-task-dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private Tasks: TasksService) { }

    @Post()
    createTask(@Body() createTaskDto: createTaskDto):Task {
        return this.Tasks.createTask(createTaskDto);
    }

    @Get()
    getAllTasks() {
        return this.Tasks.getAllTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.Tasks.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string):string {
        return this.Tasks.deleteTask(id);
    }

    @Patch('/:id')
    updateStatus(
        @Param('id') id: string,
        @Body() updateTaskStatus: updateTaskStatus
    ){
        const { status } = updateTaskStatus;
        return this.Tasks.updateTaskStatus(id ,status);
    }

}