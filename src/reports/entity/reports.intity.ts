import { Teachers } from '../../teachers/entity/teachers.entity';
import { Students } from '../../students/entity/students.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sanctions: string;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(() => Teachers, (teachers) => teachers.reports)
  teachers: Teachers;

  @ManyToOne(() => Students, (students) => students.reports)
  students: Students;
}
