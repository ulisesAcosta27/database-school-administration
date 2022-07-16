import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TutorsService } from './tutors.service';
import { TutorsDTO } from './dto/tutors.dto';

@Controller('tutors')
export class TutorsController {
  constructor(private readonly tutorsService: TutorsService) {}

  @Get()
  findAll() {
    return this.tutorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tutorsService.findOne(id);
  }

  @Post()
  create(@Body() tutorsDTO: TutorsDTO) {
    return this.tutorsService.create(tutorsDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.tutorsService.delete(id);
  }
}
