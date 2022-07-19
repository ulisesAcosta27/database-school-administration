import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from './entity/students.entity';
import { Repository, DeleteResult } from 'typeorm';
import { IStudent } from './interface/students.interface';
import { StudentDTO } from './dto/students.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private readonly studentsRepository: Repository<Students>,
  ) {}

  async findAll(): Promise<IStudent[]> {
    return await this.studentsRepository.find({
      relations: {
        user: true,
        tutors: true,
        reports: true,
        subjects: true,
      },
    });
  }

  async findOne(id: number): Promise<IStudent> {
    return await this.studentsRepository.findOne({
      where: { id },
      relations: { user: true },
    });
  }

  async create(
    userId: any,
    idTutor: any,
    studentDTO: StudentDTO,
  ): Promise<IStudent> {
    const createNewStudent = this.studentsRepository.create(studentDTO);
    createNewStudent.user = userId;
    createNewStudent.tutors = idTutor;
    return await this.studentsRepository.save(createNewStudent);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.studentsRepository.delete(id);
  }
}
