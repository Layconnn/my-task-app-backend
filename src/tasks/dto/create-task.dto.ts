// src/tasks/dto/create-task.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Title of the task' })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiPropertyOptional({ description: 'Description of the task' })
  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
