import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDTO } from './dto/students.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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

  @Post('user/:userId/tutor/:idTutor')
  create(
    @Body() studentDTO: StudentDTO,
    @Param('userId') userId: number,
    @Param('idTutor') idTutor: number,
  ) {
    return this.studentsService.create(userId, idTutor, studentDTO);
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
