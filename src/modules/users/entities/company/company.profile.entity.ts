import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CompanyAccount } from './company_account.entity';

@Table({ tableName: 'company_profile' })
export class CompanyProfile extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  company_name: string;

  @Column({
    type: DataType.STRING,
  })
  company_website: string;

  @Column({
    type: DataType.TEXT,
  })
  company_description: string;

  @ForeignKey(() => CompanyAccount)
  @Column({ type: DataType.INTEGER })
  company_id: number;

  @BelongsTo(() => CompanyAccount)
  company: CompanyAccount;
}
