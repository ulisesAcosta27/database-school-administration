import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsDTO } from './dto/subjects.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
