import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entity/users.entity';
import { Students } from '../../students/entity/students.entity';

@Entity()
export class Tutors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  address: string;

  @OneToOne(() => User, (user) => user.tutors)
  user: User;

  @OneToMany(() => Students, (students) => students.tutors)
  students: Students[];
}
