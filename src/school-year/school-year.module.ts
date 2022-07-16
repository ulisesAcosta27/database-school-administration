import { Module } from '@nestjs/common';
import { SchoolYearController } from './school-year.controller';
import { SchoolYearService } from './school-year.service';
import { SchoolYear } from './entity/school-year.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolYear])],
  controllers: [SchoolYearController],
  providers: [SchoolYearService],
  exports: [SchoolYearService],
})
export class SchoolYearModule {}
