import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SeekerAccountDto {
  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @MinLength(6)
  @MaxLength(25)
  readonly name: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  readonly password: string;
}
