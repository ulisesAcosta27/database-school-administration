import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teachers } from './entity/teachers.entity';
import { Repository } from 'typeorm';
import { TeachersDTO } from './dto/teachers.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers)
    private readonly teachersRepository: Repository<Teachers>,
  ) {}

  async findAll() {
    return this.teachersRepository.find();
  }

  async findOne(id: number) {
    return this.teachersRepository.findOne({ where: { id } });
  }

  async create(teachersDTO: TeachersDTO) {
    const createNewTeacher = this.teachersRepository.create(teachersDTO);
    return this.teachersRepository.save(createNewTeacher);
  }
}
