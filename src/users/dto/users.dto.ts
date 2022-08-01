import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserRole } from '../entity/users.entity';

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
  @IsOptional()
  @IsEnum(['admin', 'student', 'teacher', 'tutor', 'preceptor', 'director'])
  readonly role: UserRole;
}
