import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { SeekerService } from 'src/modules/users/service/seeker/seeker.service';
import { CompanyService } from 'src/modules/users/service/company/company.service';
import { CompanyAccountDto } from 'src/modules/users/dto/company/company_account.dto';
import { SeekerAccountDto } from 'src/modules/users/dto/seeker/seeker_account.dto';
import { Done } from '../types';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    private readonly seekerService: SeekerService,
    private readonly companyService: CompanyService,
  ) {
    super();
  }

  serializeUser(user: SeekerAccountDto | CompanyAccountDto, done: Done) {
    done(null, user);
  }

  async deserializeUser(
    user: SeekerAccountDto | CompanyAccountDto,
    done: Done,
  ) {
    const seeker = await this.seekerService.findOneByEmail(user.email);
    if (seeker) return done(null, seeker);

    const company = await this.companyService.findOneByEmail(user.email);
    if (company) return done(null, company);
    return done(null, null);
  }
}
