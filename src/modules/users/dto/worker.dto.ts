import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsOptional,
  Length,
} from 'class-validator';

export class WorkerDto {
  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsPhoneNumber('UA')
  @IsString({ message: 'must be a valid number' })
  readonly phone: string;

  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;
}
