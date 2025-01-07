import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tarea } from './entities/tarea.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tarea])],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
