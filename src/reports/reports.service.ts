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
    return this.ReportsRepository.find();
  }

  async findOne(id: number): Promise<IReports> {
    return this.ReportsRepository.findOne({ where: { id } });
  }

  async create(reportsDTO: ReportsDTO): Promise<IReports> {
    const createNewReport = this.ReportsRepository.create(reportsDTO);
    return this.ReportsRepository.save(createNewReport);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.ReportsRepository.delete(id);
  }
}
