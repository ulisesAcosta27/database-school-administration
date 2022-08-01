import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class SubjectsDTO {
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(['1st year', '2nd year', '3rd year', '4th year', '5th year'])
  readonly course: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(['A', 'B', 'C', 'D', 'E', 'F'])
  readonly grade: string;
  readonly studentIds?: any[];
}
