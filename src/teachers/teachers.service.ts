import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teachers } from './entity/teachers.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TeachersDTO } from './dto/teachers.dto';
import { ITeachers } from './interface/teachers.interface';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers)
    private readonly teachersRepository: Repository<Teachers>,
  ) {}

  async findAll(): Promise<ITeachers[]> {
    return this.teachersRepository.find({
      relations: { user: true, subjects: true },
    });
  }

  async findOne(id: number): Promise<ITeachers> {
    return this.teachersRepository.findOne({ where: { id } });
  }

  async create(idUser: any, teachersDTO: TeachersDTO): Promise<ITeachers> {
    const createNewTeacher = this.teachersRepository.create(teachersDTO);
    createNewTeacher.user = idUser;
    return this.teachersRepository.save(createNewTeacher);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.teachersRepository.delete(id);
  }
}
