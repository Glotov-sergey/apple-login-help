import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AppleService } from './apple.service';

@Controller('apple')
export class AppleController {
  constructor(private readonly appleService: AppleService) {}
  
 @Post('/redirect')
  async redirect(@Body() payload): Promise<any> {
    if(payload.id_token) {
      return this.appleService.registerByIdToken(payload)
    }
    throw new UnauthorizedException({message: "Ошибка авторизации"})
  }
}
