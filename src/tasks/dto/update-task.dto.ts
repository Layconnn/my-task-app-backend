import { IsNotEmpty, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiPropertyOptional({ description: 'Updated title of the task' })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiPropertyOptional({ description: 'Updated description of the task' })
  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
