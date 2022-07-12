import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tutors } from './entity/tutors.entity';
import { Repository } from 'typeorm';
import { TutorsDTO } from './dto/tutors.dto';

@Injectable()
export class TutorsService {
  constructor(
    @InjectRepository(Tutors)
    private readonly tutorsRespository: Repository<Tutors>,
  ) {}

  async findAll() {
    return this.tutorsRespository.find();
  }

  async findOne(id: number) {
    return this.tutorsRespository.findOne({ where: { id } });
  }

  async create(tutorsDTO: TutorsDTO) {
    const createNewTutor = this.tutorsRespository.create(tutorsDTO);
    return this.tutorsRespository.save(createNewTutor);
  }
}
