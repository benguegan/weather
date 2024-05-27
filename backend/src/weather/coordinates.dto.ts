import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsString, isString } from 'class-validator';

export class CoordinatesDTO {
  @ApiProperty({ description: 'latitude' })
  @IsInt()
  readonly lat: number;

  @ApiProperty({ description: 'longitude' })
  @IsInt()
  readonly lon: number;
}
