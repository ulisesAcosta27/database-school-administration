import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @CreateDateColumn()
  create_at: Date;
  @Column()
  quantity: string;
}
