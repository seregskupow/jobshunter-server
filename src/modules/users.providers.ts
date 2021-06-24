import { Injectable } from '@nestjs/common';
import { EMPLOYER_REPOSITORY, WORKER_REPOSITORY } from 'src/core/constants';
import { Employer } from './users/entities/employer.entity';
import { Worker } from './users/entities/worker.entity';

export const usersProviders = [
  {
    provide: WORKER_REPOSITORY,
    useValue: Worker,
  },
  {
    provide: EMPLOYER_REPOSITORY,
    useValue: Employer,
  },
];
