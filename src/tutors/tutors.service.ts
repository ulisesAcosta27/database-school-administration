import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tutors } from './entity/tutors.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TutorsDTO } from './dto/tutors.dto';
import { ITutors } from './interface/tutors.interface';

@Injectable()
export class TutorsService {
  constructor(
    @InjectRepository(Tutors)
    private readonly tutorsRespository: Repository<Tutors>,
  ) {}

  async findAll(): Promise<ITutors[]> {
    return this.tutorsRespository.find();
  }

  async findOne(id: number): Promise<ITutors> {
    return this.tutorsRespository.findOne({ where: { id } });
  }

  async create(tutorsDTO: TutorsDTO): Promise<ITutors> {
    const createNewTutor = this.tutorsRespository.create(tutorsDTO);
    return this.tutorsRespository.save(createNewTutor);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.tutorsRespository.delete(id);
  }
}
