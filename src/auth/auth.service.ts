import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from '../users/dto/users.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByName(username);
    const isValidPassword = await this.userService.checkPassword(
      password,
      user.password,
    );
    if (user && isValidPassword) return user;
    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
  async signUp(userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }
}
