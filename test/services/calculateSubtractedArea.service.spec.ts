import { PaintService } from '../../src/paint/services/paint.service';
import { Wall } from '../../src/paint/models/room.model';

//ready!!!

describe('PaintService', () => {
  let paintService: PaintService;
  beforeEach(() => {
    paintService = new PaintService();
  });

  describe('calculateSubtractedArea', () => {
    it('should calculate subtracted area correctly', () => {
      const wall: Wall = {
        width: 4,
        height: 3,
        numDoors: 1,
        numWindows: 2,
      };

      const subtractedArea = paintService.calculateSubtractedArea(wall);

      // Calculate the expected subtracted area based on the formula
      const expectedSubtractedArea = 1 * 1.52 + 2 * 2.4;

      expect(subtractedArea).toBeCloseTo(expectedSubtractedArea, 2);
    });
  });
});
