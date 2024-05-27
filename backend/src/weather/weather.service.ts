import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import * as constant from '../common/constant';
import { CoordinatesDTO } from './coordinates.dto';

@Injectable()
export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);
  private readonly weatherApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.weatherApiKey = this.configService.get<string>('WEATHER_API_KEY');
  }

  async getCurrent(coordinates: CoordinatesDTO): Promise<AxiosResponse<any>> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `${constant.weatherEndpoint}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.weatherApiKey}`,
        )
        .pipe(
          catchError((err: AxiosError) => {
            this.logger.error(err.response.data);
            throw 'An error occured!';
          }),
        ),
    );

    return data;
  }

  getHello(): string {
    return 'Hello!';
  }
}
