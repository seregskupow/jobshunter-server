import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/modules/users/service/company/company.service';
import { SeekerService } from 'src/modules/users/service/seeker/seeker.service';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(
    private readonly seekerService: SeekerService,
    private readonly companyService: CompanyService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const seekerExist = await this.seekerService.findOneByEmail(
      request.body.email,
    );
    if (seekerExist) {
      throw new ForbiddenException('This email already in use');
    }
    const companyExist = await this.companyService.findOneByEmail(
      request.body.email,
    );
    if (companyExist) {
      throw new ForbiddenException('This email already in use');
    }
    return true;
  }
}
