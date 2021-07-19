import { Injectable } from '@nestjs/common';
import { COMPANY_REPOSITORY, SEEKER_REPOSITORY } from 'src/core/constants';
import { CompanyAccount } from './entities/company/company_account.entity';
import { SeekerAccount } from './entities/seeker/seeker_account.entity';

export const usersProviders = [
  {
    provide: SEEKER_REPOSITORY,
    useValue: SeekerAccount,
  },
  {
    provide: COMPANY_REPOSITORY,
    useValue: CompanyAccount,
  },
];
