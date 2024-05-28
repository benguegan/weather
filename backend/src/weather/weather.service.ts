import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import * as constant from '../common/constant';
import {
  GetCurrent,
  TemperaturePerception,
  TemperatureThreshold,
  WeatherRO,
} from './weather.type';

@Injectable()
export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);
  private readonly weatherApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.weatherApiKey = this.configService.get<string>(
      'WEATHER_API_KEY',
    ) as string;
  }

  getCurrent: GetCurrent = async (coordinates) => {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `${constant.weatherEndpoint}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.weatherApiKey}&units=imperial`,
        )
        .pipe(
          catchError((err: AxiosError) => {
            this.logger.error(err?.response?.data as any);
            throw 'An error occured!';
          }),
        ),
    );

    let feelsLike = TemperaturePerception.MODERATE;
    if (data.main.feels_like > TemperatureThreshold.HOT) {
      feelsLike = TemperaturePerception.HOT;
    } else if (data.main.feels_like < TemperatureThreshold.COLD) {
      feelsLike = TemperaturePerception.COLD;
    }

    const res: WeatherRO = {
      condition: data.weather[0].main,
      feels_like: feelsLike,
      temperature: `${data.main.temp} °F`,
    };

    return res;
  };
}
