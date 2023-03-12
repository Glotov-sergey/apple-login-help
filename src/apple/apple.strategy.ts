import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from '@arendajaelu/nestjs-passport-apple'
import { ConfigService } from "@nestjs/config";


export class AppleLoginStrategy extends PassportStrategy(Strategy, 'apple') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get("APPLE_CLIENTID"),
      teamID: configService.get("APPLE_CLIENTID"),
      keyID: configService.get("APPLE_CLIENTID"),
      keyFilePath: configService.get("APPLE_CLIENTID"),
      callbackURL: configService.get("APPLE_CLIENTID"),
      passReqToCallback: false,
      scope: ['email', 'name']
    })
  }
}