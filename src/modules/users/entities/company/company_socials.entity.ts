import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { CompanyAccount } from './company_account.entity';

@Table({ tableName: 'company_socials' })
export class CompanySocials extends Model {
  @Column({
    type: DataType.STRING,
  })
  skype: string;

  @Column({
    type: DataType.STRING,
  })
  linkedin: string;

  @Column({
    type: DataType.STRING,
  })
  instagram: string;

  @Column({
    type: DataType.STRING,
  })
  telegram: string;

  @Column({
    type: DataType.STRING,
  })
  twitter: string;

  @Column({
    type: DataType.STRING,
  })
  youtube: string;

  @ForeignKey(() => CompanyAccount)
  @Column({ type: DataType.INTEGER })
  company_account_id: number;

  @BelongsTo(() => CompanyAccount)
  company_account: CompanyAccount;
}
