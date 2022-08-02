import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersDTO } from './dto/teachers.dto';
import { Auth } from 'src/auth/decorators/auth.decorathor';
import { ValidRoles } from 'src/auth/interface/valid-roles.interface';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  //Nuevo
  @Get()
  @Auth(ValidRoles.superUser)
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.teachersService.findOne(id);
  }

  @Post('user/:idUser')
  create(@Param('idUser') idUser: number, @Body() teachersDTO: TeachersDTO) {
    return this.teachersService.create(idUser, teachersDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.teachersService.delete(id);
  }
}
