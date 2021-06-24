import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { City } from 'src/core/database/system_entities/city.entity';
import { District } from 'src/core/database/system_entities/district.entity';
import { Vacancy } from './vacancy.entity';

@Table({ tableName: 'vacancy_location' })
export class Vacancylocation extends Model {
  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER })
  city_id: City;

  @BelongsTo(() => City)
  city: City;

  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER })
  district_id: City;

  @BelongsTo(() => District)
  district: District;

  @Column({
    type: DataType.STRING,
  })
  lat: string;

  @Column({
    type: DataType.STRING,
  })
  long: string;

  @ForeignKey(() => Vacancy)
  @Column({ type: DataType.INTEGER })
  vacancy_id: number;

  @BelongsTo(() => Vacancy)
  vacancy: Vacancy[];
}
