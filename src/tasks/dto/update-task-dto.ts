import { IsEnum } from "class-validator";
import { TaskStatus } from "../tasks-status.enum";

export class updateTaskStatus {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}