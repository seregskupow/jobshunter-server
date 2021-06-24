import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'employers' })
export class Employer extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  companyName: string;

  //ADD relation to workers count table

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  //Example "lat:asdasdasd;long:asdasdasd;"

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  adress: string;

  //Add relation to vacancytable
}
