// paint.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { PaintService } from '../services/paint.service';
import { RoomDto } from '../models/room.dto'; // Importe o DTO aqui
import { Room } from '../models/room.model';

@Controller('paint')
export class PaintController {
  constructor(private readonly paintService: PaintService) {}

  @Post('calculate')
  calculatePaint(@Body() roomDto: RoomDto) {
    // Transforme o DTO em um objeto do modelo antes de usar no serviço, se necessário
    const room = this.transformDtoToModel(roomDto);

    const paintRequired = this.paintService.calculatePaintRequired(room);
    const suggestedCans = this.paintService.suggestPaintCans(paintRequired);

    return {
      paintRequiredLiters: paintRequired,
      suggestedCans,
    };
  }

  // Adicione esse método para transformar o DTO em um objeto do modelo
  private transformDtoToModel(roomDto: RoomDto): Room {
    const room = new Room();
    room.walls = roomDto.walls;
    return room;
  }
}
