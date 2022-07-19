import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersDTO } from './dto/teachers.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  //Nuevo
  @Get()
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
