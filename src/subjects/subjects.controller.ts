import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsDTO } from './dto/subjects.dto';
import { Auth } from 'src/auth/decorators/auth.decorathor';
import { ValidRoles } from 'src/auth/interface/valid-roles.interface';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get()
  @Auth(ValidRoles.teacher)
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subjectsService.findOne(id);
  }

  @Post('/teacher/:idTeacher/')
  create(
    @Body() subjectsDTO: SubjectsDTO,
    @Param('idTeacher') idTeacher: number,
  ) {
    return this.subjectsService.create(subjectsDTO, idTeacher);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subjectsService.delete(id);
  }
}
