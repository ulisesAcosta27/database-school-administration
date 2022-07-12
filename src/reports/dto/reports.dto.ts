import { IsNotEmpty, IsString } from 'class-validator';

export class ReportsDTO {
  readonly id?: number;
  @IsString()
  @IsNotEmpty()
  readonly sanctions: string;

  @IsString()
  @IsNotEmpty()
  readonly create_at: Date;
}
