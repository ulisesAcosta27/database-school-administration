import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserDTO } from '../users/dto/users.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  // req.user envia el email y el password hacia services
  async signIn(@Req() req) {
    return await this.authService.signIn(req.body);
  }

  @Post('signup')
  async signUp(@Body() userDTO: UserDTO) {
    return await this.authService.signUp(userDTO);
  }
}
