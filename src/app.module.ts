import { Module } from '@nestjs/common';
import { TasksService } from './tasks/task.service';
import { TasksController } from './tasks/task.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class AppModule {}
