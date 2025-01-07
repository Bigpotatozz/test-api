import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tarea/tarea.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tarea } from './tarea/entities/tarea.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [Tarea],
      autoLoadModels: true,
      synchronize: true,
    }),
    TareaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
