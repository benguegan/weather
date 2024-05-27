import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';
import { WeatherModule } from './weather/weather.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig], isGlobal: true }),
    WeatherModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
