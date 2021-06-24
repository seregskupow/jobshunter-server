import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Vacancy } from './vacancy.entity';

@Table({ tableName: 'vacancy_bonus' })
export class VacancyBonus extends Model {
  @ForeignKey(() => Vacancy)
  @Column({ type: DataType.INTEGER })
  vacancy_id: number;

  @BelongsTo(() => Vacancy)
  vacancy: Vacancy;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
