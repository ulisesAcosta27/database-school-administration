import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsDTO } from './dto/reports.dto';

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

  @Post()
  create(@Body() reportsDTO: ReportsDTO) {
    return this.reportsService.create(reportsDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.reportsService.delete(id);
  }
}
