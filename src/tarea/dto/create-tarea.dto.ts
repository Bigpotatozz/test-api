import { IsBoolean, IsString } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  nombre: string;
  @IsString()
  descripcion: string;

  fecha: Date;
  @IsBoolean()
  estado: boolean;
}
