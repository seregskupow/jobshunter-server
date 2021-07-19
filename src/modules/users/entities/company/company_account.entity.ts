import {
  Table,
  Column,
  Model,
  DataType,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Vacancy } from 'src/modules/vacancies/entities/vacancy.entity';
import { CompanyProfile } from './company.profile.entity';
import { CompanyImage } from './company_images.entity';
import { CompanySocials } from './company_socials.entity';

@Table({ tableName: 'company_account' })
export class CompanyAccount extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @HasOne(() => CompanyProfile)
  company_profile: CompanyProfile;

  @HasMany(() => CompanyImage)
  company_images: CompanyImage[];

  @HasOne(() => CompanySocials)
  company_socials: CompanySocials;

  @HasMany(() => Vacancy)
  vacancies: Vacancy[];
}
