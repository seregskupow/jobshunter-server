import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { JobCategory } from './job_category.entity';
import { SubcategoryVacancy } from './subcategory_vacancy.entity';
import { Vacancy } from './vacancy.entity';

@Table({ tableName: 'job_subcategory' })
export class JobSubCategory extends Model {
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

  @ForeignKey(() => JobCategory)
  @Column({ type: DataType.INTEGER })
  category_id: JobCategory;

  @BelongsTo(() => JobCategory)
  category: JobCategory;

  @BelongsToMany(() => Vacancy, () => SubcategoryVacancy)
  vacancies: Vacancy[];
}
