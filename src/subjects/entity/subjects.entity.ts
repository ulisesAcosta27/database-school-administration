import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teachers } from '../../teachers/entity/teachers.entity';
import { Notes } from '../../notes/entity/notes.intity';
import { Students } from '../../students/entity/students.entity';

@Entity()
export class Subjects {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  course: string;
  @Column()
  grade: string;

  @ManyToOne(() => Teachers, (teachers) => teachers.subjects)
  teachers: Teachers;

  @OneToMany(() => Notes, (notes) => notes.subjects)
  notes: Notes;

  @ManyToMany(() => Students, (students) => students.subjects)
  students: Students[];
}
