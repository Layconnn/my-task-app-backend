import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async search(title: string) {
    return await this.prisma.task.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
    });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  async create(dto: CreateTaskDto) {
    return await this.prisma.task.create({ data: dto });
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.findOne(id);
    return await this.prisma.task.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prisma.task.delete({ where: { id } });
  }
}
