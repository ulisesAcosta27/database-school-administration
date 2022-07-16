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

  @Post()
  create(@Body() subjectsDTO: SubjectsDTO) {
    return this.subjectsService.create(subjectsDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subjectsService.delete(id);
  }
}
