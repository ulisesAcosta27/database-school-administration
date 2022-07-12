import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reports } from './entity/reports.intity';
import { Repository } from 'typeorm';
import { ReportsDTO } from './dto/reports.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly ReportsRepository: Repository<Reports>,
  ) {}

  async findAll() {
    return this.ReportsRepository.find();
  }

  async findOne(id: number) {
    return this.ReportsRepository.findOne({ where: { id } });
  }

  async create(reportsDTO: ReportsDTO) {
    const createNewReport = this.ReportsRepository.create(reportsDTO);
    return this.ReportsRepository.save(createNewReport);
  }
}
