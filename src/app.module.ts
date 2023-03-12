import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppleModule } from './apple/apple.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: "Твой путь до файла .env"}), JwtModule.register({}), AppleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
