import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";

import { TasksService } from "./tasks.service";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/createTask.dto";
import { UpdateTaskDto } from "./dto/updateTask.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.get();
  }

  @Get("/:id")
  getTaskById(@Param("id") id: string): Promise<Task> {
    return this.tasksService.getById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto
  ): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: string): Promise<any> {
    return this.tasksService.delete(id);
  }

  @Put("/:id")
  updateTask(
    @Param("id") id: string,
    @Body() updateTaskDto: UpdateTaskDto
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }
}