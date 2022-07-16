import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Students } from '../../students/entity/students.entity';
import { Tutors } from '../../tutors/entity/tutors.entity';
import { Teachers } from '../../teachers/entity/teachers.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  role: string;

  @OneToOne(() => Students, (students) => students.user)
  @JoinColumn()
  students: Students;

  @OneToOne(() => Tutors, (tutors) => tutors.user)
  @JoinColumn()
  tutors: Tutors;

  @OneToOne(() => Teachers, (teachers) => teachers.user)
  @JoinColumn()
  teachers: Teachers;
}
