import {
  Controller,
  Post,
  UseGuards,
  Request,
  Response,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';
import { GoogleAuthGuard } from 'src/core/guards/googleAuth.guard';
import {
  LocalCompanyAuthGuard,
  LocalSeekerAuthGuard,
} from 'src/core/guards/localAuth.guard';
import { CompanyAccountDto } from '../users/dto/company/company_account.dto';
import { SeekerAccountDto } from '../users/dto/seeker/seeker_account.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalSeekerAuthGuard)
  @Post('login/seeker')
  async loginSeeker(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(LocalCompanyAuthGuard)
  @Post('login/company')
  async loginCompany(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google')
  async googleLogin(@Request() req) {
    console.log({ req: req.user });
    return req.user;
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  redirect(@Response() res, @Request() req) {
    console.log({ req: req.user['dataValues'] });
    res.redirect('http://localhost:5000/');
  }

  @UseGuards(DoesUserExist)
  @Post('signup/seeker')
  async signUpSeeker(@Body() seeker: SeekerAccountDto) {
    return await this.authService.createSeeker(seeker);
  }

  @UseGuards(DoesUserExist)
  @Post('signup/company')
  async signUpCompany(@Body() company: CompanyAccountDto) {
    return await this.authService.createSeeker(company);
  }
}
