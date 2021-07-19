import { Inject, Injectable } from '@nestjs/common';
import { SEEKER_REPOSITORY } from 'src/core/constants';
import { SeekerAccountDto } from '../../dto/seeker/seeker_account.dto';
import { SeekerAccount } from '../../entities/seeker/seeker_account.entity';

@Injectable()
export class SeekerService {
  constructor(
    @Inject(SEEKER_REPOSITORY)
    private readonly seekerRepository: typeof SeekerAccount,
  ) {}
  async create(seeker: SeekerAccountDto): Promise<SeekerAccount> {
    return await this.seekerRepository.create<SeekerAccount>(seeker);
  }

  async findOneByEmail(email: string): Promise<SeekerAccount> {
    return await this.seekerRepository.findOne<SeekerAccount>({
      where: { email },
    });
  }

  async findOneById(id: number): Promise<SeekerAccount> {
    return await this.seekerRepository.findOne<SeekerAccount>({
      where: { id },
    });
  }
}
