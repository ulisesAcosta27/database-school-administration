import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDTO } from './dto/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentsService.findOne(id);
  }

  @Post('tutor/:idTutor')
  create(@Body() studentDTO: StudentDTO, @Param('idTutor') idTutor: number) {
    return this.studentsService.create(idTutor, studentDTO);
  }

  // @Put('tutor/:idTutor')
  // update(@Param('idTutor') idTutor: number) {
  //   return this.studentsService.update(idTutor);
  // }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.studentsService.delete(id);
  }
}
