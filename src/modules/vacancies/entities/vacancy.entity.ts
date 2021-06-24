import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
  BelongsToMany,
} from 'sequelize-typescript';
import { CompanyAccount } from 'src/modules/users/entities/company/company_account.entity';
import { SeekerSavedVacancies } from 'src/modules/users/entities/seeker/saved_vacancies.entity';
import { SeekerAccount } from 'src/modules/users/entities/seeker/seeker_account.entity';
import { JobCategory } from './job_category.entity';
import { JobSubCategory } from './job_subcategory.entity';
import { SubcategoryVacancy } from './subcategory_vacancy.entity';
import { VacancyApplicants } from './vacancy_applicants.entity';
import { VacancyBonus } from './vacancy_bonus.entity';
import { Vacancylocation } from './vacancy_location.entity';

@Table({ tableName: 'vacancy' })
export class Vacancy extends Model {
  @ForeignKey(() => CompanyAccount)
  @Column({ type: DataType.INTEGER })
  posted_by_id: number;

  @BelongsTo(() => CompanyAccount)
  company_account: CompanyAccount;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created_date: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @ForeignKey(() => JobCategory)
  @Column({ type: DataType.INTEGER })
  job_category_id: number;

  @BelongsTo(() => JobCategory)
  job_category: JobCategory;

  @BelongsToMany(() => SeekerAccount, () => SeekerSavedVacancies)
  seekers: SeekerAccount;

  @HasOne(() => Vacancylocation)
  location: Vacancylocation;

  @HasMany(() => VacancyBonus)
  vacancy_bonuses: VacancyBonus[];

  @BelongsToMany(() => SeekerAccount, () => VacancyApplicants)
  applicants: SeekerAccount[];

  @BelongsToMany(() => JobSubCategory, () => SubcategoryVacancy)
  subcategories: JobSubCategory[];
}
