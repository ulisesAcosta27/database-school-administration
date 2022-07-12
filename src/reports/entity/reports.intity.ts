import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sanctions: string;

  @Column()
  create_at: Date;
}
