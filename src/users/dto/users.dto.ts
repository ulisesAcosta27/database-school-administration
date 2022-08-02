import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  readonly id?: string;

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

  @IsArray()
  //['admin', 'student', 'teacher', 'tutor', 'preceptor', 'director']
  readonly roles: string[];
}
