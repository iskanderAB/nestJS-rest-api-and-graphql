import { EntityRepository, Repository } from "typeorm";
import { Task } from "./tasks.entity";

@EntityRepository(Task)
export class tasksRepository extends Repository<Task> {
    
}