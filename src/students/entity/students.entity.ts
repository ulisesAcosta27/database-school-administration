import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entity/users.entity';
import { Tutors } from '../../tutors/entity/tutors.entity';
import { Reports } from '../../reports/entity/reports.intity';
import { Notes } from '../../notes/entity/notes.intity';
import { SchoolYear } from '../../school-year/entity/school-year.entity';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => User, (user) => user.students)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Tutors, (tutors) => tutors.students)
  tutors: Tutors;

  @OneToMany(() => Reports, (reports) => reports.students)
  reports: Reports;

  @OneToMany(() => Notes, (notes) => notes.students)
  notes: Notes[];

  @OneToMany(() => SchoolYear, (schoolYear) => schoolYear.students)
  schoolYear: SchoolYear[];
}
