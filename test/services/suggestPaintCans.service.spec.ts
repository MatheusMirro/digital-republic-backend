import { PaintService } from '../../src/paint/services/paint.service';
import { PaintCanSize } from '../../src/paint/enums/paint-can.enum';

describe('PaintService', () => {
  let paintService: PaintService;

  beforeEach(() => {
    paintService = new PaintService();
  });

  describe('suggestPaintCans', () => {
    it('should suggest paint cans based on quantity', () => {
      const quantity = 19;
      const suggestedCans = paintService.suggestPaintCans(quantity);

      const expectedSuggestedCans = [
        PaintCanSize.EXTRA_LARGE,
        PaintCanSize.SMALL,
        PaintCanSize.SMALL,
      ];

      expect(suggestedCans).toEqual(expectedSuggestedCans);
    });
  });
});
