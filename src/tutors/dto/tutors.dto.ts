import { IsNotEmpty, IsString } from 'class-validator';

export class TutorsDTO {
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsNotEmpty()
  @IsString()
  readonly street: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;
}
