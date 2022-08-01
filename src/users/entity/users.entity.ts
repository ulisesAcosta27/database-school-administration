import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tutors } from '../../tutors/entity/tutors.entity';
import { Teachers } from '../../teachers/entity/teachers.entity';

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Seller = 'SELLER',
}

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
  @Column({ enum: UserRole, default: UserRole.Client })
  role: UserRole;

  @OneToOne(() => Tutors, (tutors) => tutors.user)
  tutors: Tutors;

  @OneToOne(() => Teachers, (teachers) => teachers.user)
  teachers: Teachers;
}
