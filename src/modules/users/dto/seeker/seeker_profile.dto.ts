import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

export class SeekerProfileDto {
  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @MinLength(3)
  @MaxLength(25)
  first_name: string;

  @IsOptional()
  @IsString({ message: 'Должно быть строкой' })
  @MinLength(3)
  @MaxLength(25)
  last_name: string;
  bio: string;
  expected_salary: number;
  portfolio_url: string;
  seeker_id: number;
}
