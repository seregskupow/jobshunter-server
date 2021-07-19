import { CompanyAccountDto } from 'src/modules/users/dto/company/company_account.dto';
import { SeekerAccountDto } from 'src/modules/users/dto/seeker/seeker_account.dto';

export type googlePayload = {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
};

export type Done = (
  err: Error,
  user: SeekerAccountDto | CompanyAccountDto,
) => void;
