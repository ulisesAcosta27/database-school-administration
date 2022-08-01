import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { TutorsModule } from './tutors/tutors.module';
import { ReportsModule } from './reports/reports.module';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'charango',
      database: 'db_school',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    StudentsModule,
    TeachersModule,
    TutorsModule,
    ReportsModule,
    NotesModule,
    UsersModule,
    SubjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
