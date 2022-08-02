import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { UserDTO } from 'src/users/dto/users.dto';
import { User } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async create(userDTO: UserDTO) {
    try {
      const user = await this.usersService.create(userDTO);
      return {
        ...user,
        token: this.getJwtToken({
          email: user.email,
        }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDTO: LoginUserDTO) {
    try {
      const { email, password } = loginUserDTO;
      const user = await this.usersRepository.findOne({
        where: { email },
        select: { email: true, password: true, id: true },
      });

      if (!user)
        throw new UnauthorizedException('Credentail are not valid (email)');

      if (!bcrypt.compareSync(password, user.password))
        throw new UnauthorizedException('Credentail are not valid (password)');
      return {
        ...user,
        token: this.getJwtToken({
          email: user.email,
        }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private getJwtToken(paylaad: JwtPayload) {
    const token = this.jwtService.sign(paylaad);
    return token;
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Please check server logs');
  }
}
