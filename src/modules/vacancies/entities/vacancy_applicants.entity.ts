import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { SeekerAccount } from 'src/modules/users/entities/seeker/seeker_account.entity';
import { Vacancy } from './vacancy.entity';

@Table({ tableName: 'vacancy_applicants' })
export class VacancyApplicants extends Model {
  @ForeignKey(() => SeekerAccount)
  @Column({ type: DataType.INTEGER })
  seeker_id: number;

  @ForeignKey(() => Vacancy)
  @Column({ type: DataType.INTEGER })
  vacancy_id: number;

  @Column({
    type: DataType.ENUM,
    values: ['approved', 'rejected', 'pending'],
    defaultValue: 'pending',
    allowNull: false,
  })
  status: string;
}
