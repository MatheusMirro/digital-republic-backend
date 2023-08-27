// room.dto.ts
import { IsArray, IsNumber, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class WallDto {
  @IsNumber()
  @IsNotEmpty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  numDoors: number;

  @IsNumber()
  @IsNotEmpty()
  numWindows: number;
}

export class RoomDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WallDto)
  walls: WallDto[];
}
