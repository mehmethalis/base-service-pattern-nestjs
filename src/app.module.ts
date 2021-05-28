import { Module } from "@nestjs/common";
import { configureDb } from "./config/typeorm.config";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configureDb()),
    TasksModule],
  controllers: [],
  providers: []
})
export class AppModule {
}
