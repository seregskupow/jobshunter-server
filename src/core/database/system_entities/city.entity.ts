import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Vacancylocation } from 'src/modules/vacancies/entities/vacancy_location.entity';
import { District } from './district.entity';

@Table({ tableName: 'city' })
export class City extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.ENUM,
    values: ['ua', 'en'],
    allowNull: false,
  })
  language: string;

  @HasMany(() => District)
  districts: District[];

  @HasMany(() => Vacancylocation)
  vacancies: Vacancylocation[];
}
