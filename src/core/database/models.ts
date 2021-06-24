import { CompanyProfile } from 'src/modules/users/entities/company/company.profile.entity';
import { CompanyAccount } from 'src/modules/users/entities/company/company_account.entity';
import { CompanyImage } from 'src/modules/users/entities/company/company_images.entity';
import { CompanyPhone } from 'src/modules/users/entities/company/company_phones.entity';
import { CompanySocials } from 'src/modules/users/entities/company/company_socials.entity';
import { EducationalDetail } from 'src/modules/users/entities/seeker/education_detail.entity';
import { SeekerExperience } from 'src/modules/users/entities/seeker/experience_detail.entity';
import { SeekerSavedVacancies } from 'src/modules/users/entities/seeker/saved_vacancies.entity';
import { SeekerAccount } from 'src/modules/users/entities/seeker/seeker_account.entity';
import { SeekerProfile } from 'src/modules/users/entities/seeker/seeker_profile.entity';
import { SeekerSocials } from 'src/modules/users/entities/seeker/seeker_socials.entity';
import { JobCategory } from 'src/modules/vacancies/entities/job_category.entity';
import { JobSubCategory } from 'src/modules/vacancies/entities/job_subcategory.entity';
import { SubcategoryVacancy } from 'src/modules/vacancies/entities/subcategory_vacancy.entity';
import { Vacancy } from 'src/modules/vacancies/entities/vacancy.entity';
import { VacancyApplicants } from 'src/modules/vacancies/entities/vacancy_applicants.entity';
import { VacancyBonus } from 'src/modules/vacancies/entities/vacancy_bonus.entity';
import { Vacancylocation } from 'src/modules/vacancies/entities/vacancy_location.entity';
import { City } from './system_entities/city.entity';
import { District } from './system_entities/district.entity';

export const models = [
  City,
  District,
  CompanyAccount,
  CompanyImage,
  CompanyPhone,
  CompanySocials,
  CompanyProfile,
  EducationalDetail,
  SeekerExperience,
  SeekerSavedVacancies,
  SeekerAccount,
  SeekerProfile,
  SeekerSocials,
  JobCategory,
  JobSubCategory,
  SubcategoryVacancy,
  VacancyApplicants,
  VacancyBonus,
  Vacancylocation,
  Vacancy,
];
