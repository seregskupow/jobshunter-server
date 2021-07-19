import { Inject, Injectable } from '@nestjs/common';
import { COMPANY_REPOSITORY, SEEKER_REPOSITORY } from 'src/core/constants';
import { EmployerDto } from './dto/employer.dto';
import { WorkerDto } from './dto/worker.dto';
import { Employer } from './entities/employer.entity';
import { Worker } from './entities/worker.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(SEEKER_REPOSITORY) private readonly workerRepository: typeof Worker,
    @Inject(COMPANY_REPOSITORY)
    private readonly employerRepository: typeof Employer,
  ) {}

  //Workers related
  async createWorker(worker: WorkerDto): Promise<Worker> {
    return await this.workerRepository.create<Worker>(worker);
  }

  async findOneWorkerByEmail(email: string): Promise<Worker> {
    return await this.workerRepository.findOne<Worker>({ where: { email } });
  }

  async findOneWorkerById(id: number): Promise<Worker> {
    return await this.workerRepository.findOne<Worker>({ where: { id } });
  }

  //Employers related
  async createEmployerr(employer: EmployerDto): Promise<Employer> {
    return await this.employerRepository.create<Employer>(employer);
  }
  async findOneEmployerByEmail(email: string): Promise<Employer> {
    return await this.employerRepository.findOne<Employer>({
      where: { email },
    });
  }
  async findOneEmployerById(id: number): Promise<Employer> {
    return await this.employerRepository.findOne<Employer>({ where: { id } });
  }
}
