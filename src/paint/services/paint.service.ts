import { Injectable } from '@nestjs/common';
import { Room, Wall } from '../models/room.model';
import { DoorDimensions } from '../enums/door.enum';
import { WindowDimensions } from '../enums/window.enum';
import { PaintCanSize, PaintRequired } from '../enums/paint-can.enum';
import { PaintedMeters } from '../enums/square-meters.enum';
@Injectable()
export class PaintService {
  calculatePaintRequired(room: Room): number {
    let totalPaintRequired = PaintRequired.valuePaintRequired;

    for (const wall of room.walls) {
      const wallPaintRequired = this.calculateWallPaintRequired(wall);
      totalPaintRequired += wallPaintRequired;
    }

    return totalPaintRequired;
  }

  private calculateWallPaintRequired(wall: Wall): number {
    const wallArea = wall.width * wall.height;
    const subtractedArea = this.calculateSubtractedArea(wall);
    const paintableArea = wallArea - subtractedArea;
    const paintRequired = paintableArea / PaintedMeters.paintedArea; // 1 liter paints 5 square meters

    return paintRequired;
  }

  private calculateSubtractedArea(wall: Wall): number {
    const doorArea = wall.numDoors * DoorDimensions.doorSize; // Each door is 0.80x1.90 (1.52 m²)

    const windowArea = wall.numWindows * WindowDimensions.windowSize; // Each window is 2.00x1.20 (2.4 m²)

    return doorArea + windowArea;
  }

  suggestPaintCans(quantity: number): number[] {
    const availableCanSizes = [
      PaintCanSize.EXTRA_LARGE,
      PaintCanSize.LARGE,
      PaintCanSize.MEDIUM,
      PaintCanSize.SMALL,
    ];
    const suggestedCans: number[] = [];

    for (const size of availableCanSizes) {
      while (quantity >= size) {
        suggestedCans.push(size);
        quantity -= size;
      }
    }

    return suggestedCans;
  }
}
