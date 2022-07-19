import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsDTO } from './dto/reports.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reportsService.findOne(id);
  }

  @Post('teacher/:idTeacher/student/:idStudent')
  create(
    @Body() reportsDTO: ReportsDTO,
    @Param('idTeacher') idTeacher: number,
    @Param('idStudent') idStudent: number,
  ) {
    return this.reportsService.create(idTeacher, idStudent, reportsDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.reportsService.delete(id);
  }
}
