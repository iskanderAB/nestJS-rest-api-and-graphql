import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskStatus } from './dto/update-task-dto';
import { TaskStatus } from './tasks-status.enum';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';


@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {

    constructor(private Tasks: TasksService) { }

    @Post()
    createTask(@Body() createTaskDto: createTaskDto):Promise<Task> {
        return this.Tasks.createTask(createTaskDto);
    }

    // @Get()
    // getAllTasks() {
    //     return this.Tasks.getAllTasks()
    // }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.Tasks.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): Promise<string> {
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