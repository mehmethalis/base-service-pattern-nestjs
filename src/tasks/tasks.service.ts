import { Injectable } from "@nestjs/common";
import { BaseService } from "../../libs/services/base.service";
import { Task } from "./task.entity";
import { TaskRepository } from "./task.repository";


@Injectable()
export class TasksService extends BaseService<Task> {
  constructor(private readonly repository: TaskRepository) {
    super(repository);
  }
}
