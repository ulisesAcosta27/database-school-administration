import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subjects } from './entity/subjects.entity';
import { Repository, DeleteResult } from 'typeorm';
import { ISubjects } from './interface/subjects.interface';
import { SubjectsDTO } from './dto/subjects.dto';
import { Students } from 'src/students/entity/students.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subjects)
    private readonly SubjectsRepository: Repository<Subjects>,
    @InjectRepository(Students)
    private readonly StudentsRepository: Repository<Students>,
  ) {}

  async findAll(): Promise<ISubjects[]> {
    return await this.SubjectsRepository.find({
      relations: { teachers: true },
    });
  }

  async findOne(id: number): Promise<ISubjects> {
    return await this.SubjectsRepository.findOne({ where: { id } });
  }

  async create(subjectsDTO: SubjectsDTO, idTeacher: any): Promise<ISubjects> {
    const createNewSubjects = this.SubjectsRepository.create(subjectsDTO);
    createNewSubjects.teachers = idTeacher;
    const studentsIds = subjectsDTO.studentIds;
    const studentAdded = await this.StudentsRepository.findByIds(studentsIds);
    createNewSubjects.students = studentAdded;
    return await this.SubjectsRepository.save(createNewSubjects);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.SubjectsRepository.delete(id);
  }
}
