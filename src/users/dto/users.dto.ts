import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  readonly id?: number;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(['admin', 'student', 'teacher', 'tutor', 'preceptor', 'director'])
  readonly role: string;
}
