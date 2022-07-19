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
    return await this.tutorsRespository.find({
      relations: { user: true, students: true },
    });
  }

  async findOne(id: number): Promise<ITutors> {
    return await this.tutorsRespository.findOne({ where: { id } });
  }

  async create(tutorsDTO: TutorsDTO, idUser: any) {
    const createNewTutor = this.tutorsRespository.create(tutorsDTO);
    createNewTutor.user = idUser;
    return await this.tutorsRespository.save(createNewTutor);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.tutorsRespository.delete(id);
  }
}
