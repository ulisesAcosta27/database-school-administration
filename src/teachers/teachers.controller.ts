import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersDTO } from './dto/teachers.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.teachersService.findOne(id);
  }

  @Post()
  create(@Body() teachersDTO: TeachersDTO) {
    return this.teachersService.create(teachersDTO);
  }
}
