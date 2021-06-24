import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsNumber,
  IsOptional,
  IsDataURI,
  MaxLength,
} from 'class-validator';

export class EmployerDto {
  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail()
  readonly email: string;

  @IsPhoneNumber('UA')
  @IsString({ message: 'must be a valid number' })
  readonly phone: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  readonly companyName: string;

  @IsNumber()
  readonly workersCount: number;

  @IsOptional()
  @IsString({ message: 'Должно быть строкой' })
  readonly description: string;

  @IsOptional()
  @IsDataURI()
  readonly logo: string;

  @IsOptional()
  @MaxLength(500)
  readonly adress: string;
}
