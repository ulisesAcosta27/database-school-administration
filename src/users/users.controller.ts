import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
  //Nuevo
  @Get('name/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Get('name/:name')
  findOneByName(@Param('name') name: string) {
    return this.usersService.findOneByName(name);
  }

  @Post()
  create(@Body() userDTO: UserDTO) {
    return this.usersService.create(userDTO);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userDTO: UserDTO) {
    return this.usersService.update(id, userDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
