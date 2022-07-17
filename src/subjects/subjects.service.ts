import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subjects } from './entity/subjects.entity';
import { Repository, DeleteResult } from 'typeorm';
import { ISubjects } from './interface/subjects.interface';
import { SubjectsDTO } from './dto/subjects.dto';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subjects)
    private readonly SubjectsRepository: Repository<Subjects>,
  ) {}

  async findAll(): Promise<ISubjects[]> {
    return await this.SubjectsRepository.find();
  }

  async findOne(id: number): Promise<ISubjects> {
    return await this.SubjectsRepository.findOne({ where: { id } });
  }

  async create(subjectsDTO: SubjectsDTO): Promise<ISubjects> {
    const createNewSubjects = this.SubjectsRepository.create(subjectsDTO);
    return await this.SubjectsRepository.save(createNewSubjects);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.SubjectsRepository.delete(id);
  }
}
