import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Students } from '../../students/entity/students.entity';
import { Subjects } from '../../subjects/entity/subjects.entity';

@Entity()
export class SchoolYear {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  year: Date;

  @ManyToOne(() => Students, (students) => students.schoolYear)
  students: Students;

  @OneToMany(() => Subjects, (subjects) => subjects.schoolYear)
  subjects: Subjects[];
}
