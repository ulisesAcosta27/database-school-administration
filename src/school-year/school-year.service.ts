import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolYear } from './entity/school-year.entity';
import { Repository, DeleteResult } from 'typeorm';
import { SchoolYearDTO } from './dto/school-year.dto';
import { ISchoolYear } from './interface/school-year.interface';

@Injectable()
export class SchoolYearService {
  constructor(
    @InjectRepository(SchoolYear)
    private readonly schoolYearRepository: Repository<SchoolYear>,
  ) {}

  async findAll(): Promise<ISchoolYear[]> {
    return await this.schoolYearRepository.find();
  }

  async findOne(id: number): Promise<ISchoolYear> {
    return await this.schoolYearRepository.findOne({ where: { id } });
  }

  async create(schoolYearDTO: SchoolYearDTO): Promise<ISchoolYear> {
    const createNewSchoolYear = this.schoolYearRepository.create(schoolYearDTO);
    return await this.schoolYearRepository.save(createNewSchoolYear);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.schoolYearRepository.delete(id);
  }
}
