import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { SeekerProfile } from 'src/modules/users/entities/seeker/seeker_profile.entity';
import { JobSubCategory } from './job_subcategory.entity';
import { Vacancy } from './vacancy.entity';

@Table({ tableName: 'job_field' })
export class JobCategory extends Model {
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

  @HasMany(() => SeekerProfile)
  seeker_profiles: SeekerProfile[];

  @HasMany(() => Vacancy)
  vacancies: Vacancy[];

  @HasMany(() => JobSubCategory)
  subcategories: JobSubCategory[];
}
