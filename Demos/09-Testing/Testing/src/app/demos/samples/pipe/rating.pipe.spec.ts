import { RatingPipe } from './rating.pipe';

let p: RatingPipe;

beforeEach(() => {
  p = new RatingPipe();
});

describe('RatingPipe', () => {
  it('creates an instance', () => {
    expect(p).toBeTruthy();
  });

  it("returns 'ausgezeichnet' when 2 is passed", () => {
    expect(p.transform(2)).toEqual('ausgezeichnet');
  });

  it('throws an err when a negative value is passed', () => {
    let p = new RatingPipe();
    expect(() => {
      p.transform(-1);
    }).toThrowError('Invalid param');
  });
});
