import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { SeekerService } from './service/seeker/seeker.service';
import { CompanyService } from './service/company/company.service';
@Module({
  providers: [...usersProviders, SeekerService, CompanyService],
  exports: [SeekerService, CompanyService],
})
export class UsersModule {}
