import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { SeekerAccount } from './seeker_account.entity';

@Table({ tableName: 'seeker_experience' })
export class SeekerExperience extends Model {
  @ForeignKey(() => SeekerAccount)
  @Column({ type: DataType.INTEGER })
  seeker_id: number;

  @BelongsTo(() => SeekerAccount)
  seeker: SeekerAccount;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  job_position: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;
}
