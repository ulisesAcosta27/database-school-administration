import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  Column,
} from 'typeorm';
import { Tutors } from '../../tutors/entity/tutors.entity';
import { Reports } from '../../reports/entity/reports.intity';
import { Notes } from '../../notes/entity/notes.intity';
import { Subjects } from '../../subjects/entity/subjects.entity';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Tutors, (tutors) => tutors.students)
  tutors: Tutors;

  @OneToMany(() => Reports, (reports) => reports.students)
  reports: Reports;

  @OneToMany(() => Notes, (notes) => notes.students)
  notes: Notes[];

  @ManyToMany(() => Subjects, (subjects) => subjects.students)
  subjects: Subjects[];
}
