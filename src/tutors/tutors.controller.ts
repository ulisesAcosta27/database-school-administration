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

  @Post('user/:idUser')
  create(@Body() tutorsDTO: TutorsDTO, @Param('idUser') idUser: number) {
    return this.tutorsService.create(tutorsDTO, idUser);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.tutorsService.delete(id);
  }
}
