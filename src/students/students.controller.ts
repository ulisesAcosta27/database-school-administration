import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  // Put,
} from '@nestjs/common';
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

  @Post()
  create(@Body() studentDTO: StudentDTO) {
    return this.studentsService.create(studentDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.studentsService.delete(id);
  }
}
