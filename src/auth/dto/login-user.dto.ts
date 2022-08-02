import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginUserDTO {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  password: string;
}
