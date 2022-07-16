import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entity/users.entity';
import { Reports } from '../../reports/entity/reports.intity';
import { Subjects } from '../../subjects/entity/subjects.entity';

@Entity()
export class Teachers {
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

  @OneToOne(() => User, (user) => user.teachers)
  user: User;

  @OneToMany(() => Reports, (reports) => reports.teachers)
  reports: Reports[];

  @OneToMany(() => Subjects, (subjects) => subjects.teachers)
  subjects: Subjects[];
}
