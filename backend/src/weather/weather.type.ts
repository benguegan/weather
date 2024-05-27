import { CoordinatesDTO } from './coordinates.dto';

export enum TemperatureThreshold {
  HOT = 75,
  COLD = 32,
}

export enum TemperaturePerception {
  HOT = 'hot',
  MODERATE = 'moderate',
  COLD = 'cold',
}

export type GetCurrent = (coordinates: CoordinatesDTO) => Promise<WeatherRO>;

export type WeatherRO = {
  condition: string;
  feels_like: string;
  temperature: string;
};
