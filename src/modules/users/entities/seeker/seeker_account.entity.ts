import {
  Table,
  Column,
  Model,
  DataType,
  HasOne,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Vacancy } from 'src/modules/vacancies/entities/vacancy.entity';
import { VacancyApplicants } from 'src/modules/vacancies/entities/vacancy_applicants.entity';
import { EducationalDetail } from './education_detail.entity';
import { SeekerExperience } from './experience_detail.entity';
import { SeekerSavedVacancies } from './saved_vacancies.entity';
import { SeekerProfile } from './seeker_profile.entity';
import { SeekerSocials } from './seeker_socials.entity';

@Table({ tableName: 'seeker_account' })
export class SeekerAccount extends Model {
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
    allowNull: false,
  })
  password: string;

  @HasOne(() => SeekerProfile)
  seeker_profile: SeekerProfile;

  @HasOne(() => SeekerSocials)
  seeker_socials: SeekerSocials;

  @HasOne(() => SeekerExperience)
  seeker_experience: SeekerExperience;

  @HasMany(() => EducationalDetail)
  educational_details: EducationalDetail[];

  @BelongsToMany(() => Vacancy, () => SeekerSavedVacancies)
  saved_vacancies: Vacancy[];

  @BelongsToMany(() => Vacancy, () => VacancyApplicants)
  applied_vacancies: Vacancy[];
}
