import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
