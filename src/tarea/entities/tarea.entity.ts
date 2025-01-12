import { DataTypes } from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'tarea',
  timestamps: false,
  paranoid: false,
})
export class Tarea extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  })
  id_task: number;
  @Column({
    type: DataTypes.STRING,
  })
  nombre: string;
  @Column({
    type: DataTypes.STRING,
  })
  descripcion: string;
  @Column({
    type: DataTypes.DATE,
  })
  fecha: Date;
  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  estado: boolean;
}
