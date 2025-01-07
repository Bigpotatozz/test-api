import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaDto } from './create-tarea.dto';
import { IsBoolean } from 'class-validator';

export class UpdateTareaDto extends PartialType(CreateTareaDto) {
  @IsBoolean()
  estado: boolean;
}
