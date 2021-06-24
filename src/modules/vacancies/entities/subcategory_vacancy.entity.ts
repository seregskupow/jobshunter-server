import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { JobSubCategory } from './job_subcategory.entity';
import { Vacancy } from './vacancy.entity';

@Table({ tableName: 'subcategory_vacancy' })
export class SubcategoryVacancy extends Model {
  @ForeignKey(() => Vacancy)
  @Column({ type: DataType.INTEGER })
  vacancy_id: number;

  @ForeignKey(() => JobSubCategory)
  @Column({ type: DataType.INTEGER })
  subcategory_id: number;
}
