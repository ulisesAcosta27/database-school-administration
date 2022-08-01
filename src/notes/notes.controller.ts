import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDTO } from './dto/notes.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.notesService.findOne(id);
  }

  @Post('student/:idStudent/subject/:idSubject')
  create(
    @Body() notesDTO: NotesDTO,
    @Param('idStudent') idStudent: number,
    @Param('idSubject') idSubject: number,
  ) {
    return this.notesService.create(idStudent, idSubject, notesDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.notesService.delete(id);
  }
}
