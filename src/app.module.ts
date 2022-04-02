import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/tasks.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: '5432',
      username: 'postgres',
      password: 'iskander.ab',
      database: 'task-management',
      autoLoadEntities: true,
      entities: [Task],
      synchronize: true
    })
  ],
})
export class AppModule {}
