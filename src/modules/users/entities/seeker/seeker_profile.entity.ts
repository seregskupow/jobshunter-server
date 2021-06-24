import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { JobCategory } from 'src/modules/vacancies/entities/job_category.entity';
import { SeekerAccount } from './seeker_account.entity';

@Table({ tableName: 'seeker_profile' })
export class SeekerProfile extends Model {
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.TEXT,
  })
  bio: string;

  @Column({
    type: DataType.DECIMAL,
  })
  expected_salary: number;

  @Column({
    type: DataType.TEXT,
  })
  portfolio_url: string;

  @ForeignKey(() => SeekerAccount)
  @Column({ type: DataType.INTEGER })
  seeker_id: number;

  @BelongsTo(() => SeekerAccount)
  seeker_account: SeekerAccount;

  @ForeignKey(() => JobCategory)
  @Column({ type: DataType.INTEGER })
  job_category_id: number;

  @BelongsTo(() => JobCategory)
  job_category: JobCategory;
}
