import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { Repository, DeleteResult } from 'typeorm';
import { UserDTO } from './dto/users.dto';
import { IUser } from './interface/users.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  //Nuevo
  async checkPassword(password: string, passwordDB: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordDB);
  }

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.find({
      relations: {
        tutors: true,
        teachers: true,
      },
    });
  }

  async findOne(id: number): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { id },
      relations: {
        tutors: true,
        teachers: true,
      },
    });
  }
  //Nuevo
  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findOneByName(name: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { name },
    });
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const createHashPassword = await this.hashPassword(userDTO.password);
    const createNewUser = this.userRepository.create(userDTO);
    return await this.userRepository.save({
      ...createNewUser,
      password: createHashPassword,
    });
  }

  async update(id: number, userDTO: UserDTO) {
    return await this.userRepository.update(id, userDTO);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
