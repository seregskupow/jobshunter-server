import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import {
  LocalSeekerStrategy,
  LocalCompanyStrategy,
  JwtCompanyStrategy,
  JwtSeekerStrategy,
  GoogleStrategy,
} from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { SessionSerializer } from './utils/serialize';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    UsersModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  providers: [
    AuthService,
    LocalSeekerStrategy,
    LocalCompanyStrategy,
    JwtCompanyStrategy,
    JwtSeekerStrategy,
    GoogleStrategy,
    SessionSerializer,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
