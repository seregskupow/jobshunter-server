import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { SeekerAccount } from './seeker_account.entity';

@Table({ tableName: 'educational_detail' })
export class EducationalDetail extends Model {
  @Column({
    type: DataType.STRING,
  })
  university: string;

  @Column({
    type: DataType.STRING,
  })
  major: string;

  @Column({
    type: DataType.DATE,
  })
  starting_date: Date;

  @Column({
    type: DataType.DATE,
  })
  completion_date: Date;

  @ForeignKey(() => SeekerAccount)
  @Column({ type: DataType.INTEGER })
  seeker_id: number;

  @BelongsTo(() => SeekerAccount)
  seeker_account: SeekerAccount;
}
