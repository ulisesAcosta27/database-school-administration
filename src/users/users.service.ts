import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { Repository, DeleteResult } from 'typeorm';
import { UserDTO } from './dto/users.dto';
import { IUser } from './interface/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.find({
      relations: {
        students: true,
        tutors: true,
        teachers: true,
      },
    });
  }

  async findOne(id: number): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { id },
      relations: {
        students: true,
        tutors: true,
        teachers: true,
      },
    });
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const createNewUser = this.userRepository.create(userDTO);
    return await this.userRepository.save(createNewUser);
  }

  async update(id: number, userDTO: UserDTO) {
    return await this.userRepository.update(id, userDTO);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
