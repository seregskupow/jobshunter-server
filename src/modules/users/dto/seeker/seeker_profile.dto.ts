import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SeekerProfileDto {
  @IsString({ message: 'Value must be a string' })
  @MinLength(3)
  @MaxLength(25)
  readonly first_name: string;

  @IsString({ message: 'Value must be a string' })
  @MinLength(3)
  @MaxLength(25)
  readonly last_name: string | null;

  @IsString({ message: 'Value must be a string' })
  @MaxLength(500)
  readonly bio: string | null;

  @IsInt({ message: 'Value must be int' })
  readonly expected_salary: number;

  @IsUrl()
  @MaxLength(255)
  readonly portfolio_url: string;

  @IsNotEmpty()
  @IsNumber()
  readonly seeker_id: number;
}
