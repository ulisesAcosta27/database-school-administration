import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SchoolYearService } from './school-year.service';
import { SchoolYearDTO } from './dto/school-year.dto';

@Controller('school-year')
export class SchoolYearController {
  constructor(private readonly schoolYearService: SchoolYearService) {}

  @Get()
  findAll() {
    return this.schoolYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.schoolYearService.findOne(id);
  }

  @Post()
  create(@Body() schoolYearDTO: SchoolYearDTO) {
    return this.schoolYearService.create(schoolYearDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.schoolYearService.delete(id);
  }
}
