import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reports } from './entity/reports.intity';
import { Repository, DeleteResult } from 'typeorm';
import { ReportsDTO } from './dto/reports.dto';
import { IReports } from './interface/reports.interface';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly ReportsRepository: Repository<Reports>,
  ) {}

  async findAll(): Promise<IReports[]> {
    return await this.ReportsRepository.find({
      relations: { teachers: true, students: true },
    });
  }

  async findOne(id: number): Promise<IReports> {
    return await this.ReportsRepository.findOne({ where: { id } });
  }

  async create(
    idTeacher: any,
    idStudent: any,
    reportsDTO: ReportsDTO,
  ): Promise<IReports> {
    const createNewReport = this.ReportsRepository.create(reportsDTO);
    createNewReport.teachers = idTeacher;
    createNewReport.students = idStudent;
    return await this.ReportsRepository.save(createNewReport);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.ReportsRepository.delete(id);
  }
}
