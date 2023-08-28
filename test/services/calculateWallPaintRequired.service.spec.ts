import { PaintService } from '../../src/paint/services/paint.service';
import { Wall } from 'src/paint/models/room.model';
//ready!!!
describe('PaintService', () => {
  let paintService: PaintService;

  beforeEach(() => {
    paintService = new PaintService();
  });

  describe('calculateWallPaintRequired', () => {
    it('should calculate wall paint required correctly', () => {
      //refactor tests to prevent numDoors and numWindows from entering the calculation
      const wall: Wall = {
        width: 4,
        height: 3,
        numDoors: 0, // Provide the required properties for a Wall
        numWindows: 0, // Provide the required properties for a Wall
      };

      const paintRequired = paintService.calculateWallPaintRequired(wall);

      // Calculate the expected paint required based on the formula
      const expectedPaintRequired = (wall.width * wall.height) / 5;

      expect(paintRequired).toBeCloseTo(expectedPaintRequired, 2);
    });
  });
});
