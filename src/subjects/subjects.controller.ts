import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsDTO } from './dto/subjects.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subjectsService.findOne(id);
  }

  @Post('/teacher/:idTeacher/schoolYear/:schoolYear')
  create(
    @Body() subjectsDTO: SubjectsDTO,
    @Param('idTeacher') idTeacher: number,
    @Param('schoolYear') schoolYear: number,
  ) {
    return this.subjectsService.create(subjectsDTO, idTeacher, schoolYear);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subjectsService.delete(id);
  }
}
