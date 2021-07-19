import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsUrl,
  IsNumber,
} from 'class-validator';

export class CompanyAccountDto {
  @IsString({ message: 'Value must be a string' })
  @MinLength(3)
  @MaxLength(25)
  readonly company_name: string;

  @IsUrl()
  @MaxLength(255)
  readonly company_website: string;

  @IsString({ message: 'Value must be a string' })
  @MaxLength(500)
  readonly company_description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly company_id: number;
}
