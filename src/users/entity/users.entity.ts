import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(() => Tutors, (tutors) => tutors.user)
  tutors: Tutors;

  @OneToOne(() => Students, (students) => students.user)
  students: Students;

  @OneToOne(() => Teachers, (teachers) => teachers.user)
  teachers: Teachers;
}
