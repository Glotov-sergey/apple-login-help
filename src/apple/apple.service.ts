import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppleService {
  constructor(private jwtService: JwtService) {}

  async registerByIdToken(payload: any) {
    if(payload.hasOwnProperty('id_token')) {
      // Тут можешь описать логику по работе с бд, из статьи посмотришь, что можно забрать и все такое
    }

    throw new UnauthorizedException({message: "Ошибка авторизации"})
  }
}
