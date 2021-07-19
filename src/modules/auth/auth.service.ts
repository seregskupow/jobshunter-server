import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { USER_ROLE } from 'src/core/constants';
import { CompanyAccountDto } from '../users/dto/company/company_account.dto';
import { SeekerAccountDto } from '../users/dto/seeker/seeker_account.dto';
import { CompanyAccount } from '../users/entities/company/company_account.entity';
import { SeekerAccount } from '../users/entities/seeker/seeker_account.entity';
import { CompanyService } from '../users/service/company/company.service';
import { SeekerService } from '../users/service/seeker/seeker.service';
import { googlePayload } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly seekerService: SeekerService,
    private readonly companyService: CompanyService,
    private readonly jwtService: JwtService,
  ) {}
  public async validateUser(email: string, pass: string, role: USER_ROLE) {
    // find if user exist with this email
    let user: CompanyAccount | SeekerAccount;
    if (role === 'seeker')
      user = await this.seekerService.findOneByEmail(email);
    else if (role === 'company')
      user = await this.companyService.findOneByEmail(email);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user['dataValues'];
    return result;
  }
  //TODO implement account details update
  public async validateUserGoogle(payload: googlePayload) {
    const { email, firstName: name } = payload;

    const seeker = await this.seekerService.findOneByEmail(email);
    if (seeker) return seeker;

    const company = await this.companyService.findOneByEmail(email);
    if (company) return company;

    return this.seekerService.create({ email, name });
  }

  public async login(user) {
    return { user };
  }

  private async generateToken(user: SeekerAccountDto) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }
  public async createSeeker(seeker: SeekerAccountDto) {
    // hash the password
    const pass = await this.hashPassword(seeker.password);

    // create the user
    const newSeeker = await this.seekerService.create({
      ...seeker,
      password: pass,
    });

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = newSeeker['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return { user: result, token };
  }

  public async createCompany(company: CompanyAccountDto) {
    // hash the password
    const pass = await this.hashPassword(company.password);

    // create the user
    const newCompany = await this.seekerService.create({
      ...company,
      password: pass,
    });

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = newCompany['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return { user: result, token };
  }
  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
