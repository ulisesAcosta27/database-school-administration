import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class NotesDTO {
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(['homework', 'oral-lesson', 'evaluation', 'quarterly-evaluation'])
  readonly type: string;

  readonly create_at: Date;

  @IsNotEmpty()
  @IsString()
  readonly quantity: string;
}
