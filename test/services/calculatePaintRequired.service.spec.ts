import { PaintService } from '../../src/paint/services/paint.service';
import { Room, Wall } from '../../src/paint/models/room.model';

//Ready!!!!

describe('PaintService', () => {
  let paintService: PaintService;
  beforeEach(() => {
    paintService = new PaintService();
  });

  describe('calculatePaintRequired', () => {
    it('should calculate total paint required for all walls', () => {
      const walls: Wall[] = [
        // Defina as paredes aqui...
        {
          width: 6.5,
          height: 4,
          numDoors: 2,
          numWindows: 1,
        },
        {
          width: 8,
          height: 4,
          numDoors: 1,
          numWindows: 1,
        },
        {
          width: 6,
          height: 4,
          numDoors: 1,
          numWindows: 0,
        },
        {
          width: 7,
          height: 4,
          numDoors: 1,
          numWindows: 1,
        },
      ];

      const room: Room = {
        walls: walls,
      };

      const totalPaintRequired = paintService.calculatePaintRequired(room);

      // Calcula a quantidade total esperada de tinta usando reduce
      const expectedTotalPaintRequired = walls.reduce(
        (acc, wall) => acc + paintService.calculateWallPaintRequired(wall),
        0,
      );

      expect(totalPaintRequired).toBeCloseTo(expectedTotalPaintRequired, 2);
    });
  });
});
