import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notes } from './entity/notes.intity';
import { Repository, DeleteResult } from 'typeorm';
import { NotesDTO } from './dto/notes.dto';
import { INotes } from './interface/notes.interface';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesRepository: Repository<Notes>,
  ) {}

  async findAll(): Promise<INotes[]> {
    return await this.notesRepository.find({
      relations: { subjects: true, students: true },
    });
  }

  async findOne(id: number): Promise<INotes> {
    return await this.notesRepository.findOne({ where: { id } });
  }

  async create(
    idStudent: any,
    idSubject: any,
    notesDTO: NotesDTO,
  ): Promise<INotes> {
    const createNewNote = this.notesRepository.create(notesDTO);
    createNewNote.students = idStudent;
    createNewNote.subjects = idSubject;
    return await this.notesRepository.save(createNewNote);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.notesRepository.delete(id);
  }
}
