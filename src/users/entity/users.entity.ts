import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tutors } from '../../tutors/entity/tutors.entity';
import { Teachers } from '../../teachers/entity/teachers.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  last_name: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column()
  password: string;
  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @OneToOne(() => Tutors, (tutors) => tutors.user)
  tutors: Tutors;

  @OneToOne(() => Teachers, (teachers) => teachers.user)
  teachers: Teachers;
}
