import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Vacancy } from 'src/modules/vacancies/entities/vacancy.entity';
import { SeekerAccount } from './seeker_account.entity';

@Table({ tableName: 'seeker_saved_vacancies' })
export class SeekerSavedVacancies extends Model {
  @ForeignKey(() => SeekerAccount)
  @Column({ type: DataType.INTEGER })
  seeker_id: number;

  @ForeignKey(() => Vacancy)
  @Column({ type: DataType.INTEGER })
  vacancy_id: number;
}
