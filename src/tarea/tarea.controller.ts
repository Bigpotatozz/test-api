import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Controller('tarea')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @Post('/addTask')
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareaService.create(createTareaDto);
  }

  @Get('/getPendientTasks')
  findAll() {
    return this.tareaService.findAll();
  }

  @Get('/getTask/:id')
  findOne(@Param('id') id: string) {
    return this.tareaService.findOne(+id);
  }

  @Patch('/complete/:id')
  update(@Param('id') id: string, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareaService.update(+id, updateTareaDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.tareaService.remove(+id);
  }

  @Get('/getCompleted')
  async getCompletedTasks() {
    return await this.tareaService.findCompletedTasks();
  }
}
