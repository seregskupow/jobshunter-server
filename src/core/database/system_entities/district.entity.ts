import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Vacancylocation } from 'src/modules/vacancies/entities/vacancy_location.entity';
import { City } from './city.entity';

@Table({ tableName: 'city' })
export class District extends Model {
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

  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER })
  city_id: City;

  @BelongsTo(() => City)
  city: City;

  @HasMany(() => Vacancylocation)
  vacancies: Vacancylocation[];
}
