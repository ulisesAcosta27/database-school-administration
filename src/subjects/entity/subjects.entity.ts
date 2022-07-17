import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SchoolYear } from '../../school-year/entity/school-year.entity';
import { Teachers } from '../../teachers/entity/teachers.entity';
import { Notes } from '../../notes/entity/notes.intity';

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

  @ManyToOne(() => SchoolYear, (schoolYear) => schoolYear.subjects)
  schoolYear: SchoolYear;

  @ManyToOne(() => Teachers, (teachers) => teachers.subjects)
  teachers: Teachers;

  @OneToMany(() => Notes, (notes) => notes.subjects)
  notes: Notes;
}
