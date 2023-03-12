import { Module } from '@nestjs/common';
import { AppleService } from './apple.service';
import { AppleController } from './apple.controller';
import { AppleLoginStrategy } from './apple.strategy';

@Module({
  controllers: [AppleController],
  providers: [AppleService, AppleLoginStrategy]
})
export class AppleModule {}
