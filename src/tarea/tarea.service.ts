import { HttpException, Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareaService {
  constructor(@InjectModel(Tarea) private tarea: typeof Tarea) {}
  async create(createTareaDto: CreateTareaDto) {
    try {
      const task = await this.tarea.create({
        nombre: createTareaDto.nombre,
        descripcion: createTareaDto.descripcion,
        fecha: createTareaDto.fecha,
        estado: createTareaDto.estado,
      });
      return 'Tarea creada con exito';
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, e.statusCode);
    }
  }

  async findAll() {
    try {
      const tasks = await this.tarea.findAll({ where: { estado: false } });
      return tasks;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, e.statusCode);
    }
  }

  async findOne(id: number) {
    try {
      const task = await this.tarea.findByPk(id);
      return task;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, e.statusCode);
    }
  }

  async update(id: number, updateTareaDto: UpdateTareaDto) {
    try {
      console.log(`RECIBIENDO ID: ${id}`);
      const task = await this.tarea.findByPk(id);
      task.update({ estado: updateTareaDto.estado });
      return { descripcion: 'Tarea actualizada con exito' };
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, e.statusCode);
    }
  }

  async remove(id: number) {
    try {
      const task = await this.tarea.destroy({ where: { id_task: id } });
      return 'Tarea eliminada con exito';
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, e.statusCode);
    }
  }

  async findCompletedTasks() {
    try {
      const tasks = await this.tarea.findAll({ where: { estado: true } });

      return tasks;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, e.statusCode);
    }
  }
}
