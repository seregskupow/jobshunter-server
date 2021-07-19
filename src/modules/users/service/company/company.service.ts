import { Inject, Injectable } from '@nestjs/common';
import { COMPANY_REPOSITORY } from 'src/core/constants';
import { CompanyAccountDto } from '../../dto/company/company_account.dto';
import { CompanyAccount } from '../../entities/company/company_account.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(COMPANY_REPOSITORY)
    private readonly companyRepository: typeof CompanyAccount,
  ) {}

  async create(company: CompanyAccountDto): Promise<CompanyAccount> {
    return await this.companyRepository.create<CompanyAccount>(company);
  }
  async findOneByEmail(email: string): Promise<CompanyAccount> {
    return await this.companyRepository.findOne<CompanyAccount>({
      where: { email },
    });
  }
  async findOneById(id: number): Promise<CompanyAccount> {
    return await this.companyRepository.findOne<CompanyAccount>({
      where: { id },
    });
  }
}
