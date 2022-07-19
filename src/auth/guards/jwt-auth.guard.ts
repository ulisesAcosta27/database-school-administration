import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// Hace las validaciones de autenticacion
export class JwtAuthGuard extends AuthGuard('jwt') {}
