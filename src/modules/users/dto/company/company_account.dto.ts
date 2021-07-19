import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CompanyAccountDto {
  @IsNotEmpty()
  @IsString({ message: 'Value must be a string' })
  @MinLength(3)
  @MaxLength(50)
  readonly name: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  readonly password: string;
}
