import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsNotEmpty, IsString, isString } from 'class-validator';

export class CoordinatesDTO {
  @ApiProperty({ description: 'latitude' })
  @IsInt()
  @IsNotEmpty()
  readonly lat: number;

  @ApiProperty({ description: 'longitude' })
  @IsInt()
  @IsNotEmpty()
  readonly lon: number;
}
