import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CoordinatesDTO } from './coordinates.dto';
import { WeatherService } from './weather.service';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getCurrentWeather(@Query() coordinates: CoordinatesDTO): Promise<any> {
    return this.weatherService.getCurrent(coordinates);
  }
}
