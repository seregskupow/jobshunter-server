import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CompanyAccount } from './company_account.entity';

@Table({ tableName: 'company_phones' })
export class CompanyPhone extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone: string;

  @ForeignKey(() => CompanyAccount)
  @Column({ type: DataType.INTEGER })
  company_account_id: number;

  @BelongsTo(() => CompanyAccount)
  company_account: CompanyAccount;
}
