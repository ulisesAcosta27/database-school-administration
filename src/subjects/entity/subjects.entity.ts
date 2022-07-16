import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SchoolYear } from '../../school-year/entity/school-year.entity';
import { Teachers } from '../../teachers/entity/teachers.entity';

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
}
