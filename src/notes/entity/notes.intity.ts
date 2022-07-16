import { Students } from '../../students/entity/students.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
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

  @ManyToOne(() => Students, (students) => students.notes)
  students: Students;
}
