import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import { WeatherRO } from './weather.type';
import { CoordinatesDTO } from './coordinates.dto';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getCurrent(@Query() coordinates: CoordinatesDTO): Promise<WeatherRO> {
    return this.weatherService.getCurrent(coordinates);
  }
}
