import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dto/login-user.dto';
import { ValidRoles } from './interface/valid-roles.interface';
import { Auth } from './decorators/auth.decorathor';
import { UserDTO } from 'src/users/dto/users.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() userDTO: UserDTO) {
    return this.authService.create(userDTO);
  }

  @Post('login')
  loginUser(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.login(loginUserDTO);
  }

  @Get('private')
  @Auth(ValidRoles.admin)
  testtingPrivateRoute() {
    return {
      ok: true,
      message: 'Hola Mundo Private 1',
    };
  }
}
