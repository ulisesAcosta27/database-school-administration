import { IsNotEmpty, IsString } from 'class-validator';

export class ReportsDTO {
  readonly id?: number;
  @IsString()
  @IsNotEmpty()
  readonly sanctions: string;

  readonly create_at: Date;
}
