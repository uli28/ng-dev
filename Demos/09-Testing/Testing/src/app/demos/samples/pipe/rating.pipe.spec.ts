import { RatingPipe } from './rating.pipe';

let p: RatingPipe;

beforeEach(() => {
  p = new RatingPipe();
});

describe('RatingPipe', () => {
  it('creates an instance', () => {
    expect(p).toBeTruthy();
  });

  it('returns the correct translations', () => {
    expect(p.transform(1)).toEqual('umwerfend');
    expect(p.transform(2)).toEqual('ausgezeichnet');
    expect(p.transform(3)).toEqual('in ordnung');
  });

  it('throws an err when a negative value is passed', () => {
    let p = new RatingPipe();
    expect(() => {
      p.transform(-1);
    }).toThrowError('Invalid param');
  });

  it('throws an err when a high value is passed', () => {
    let p = new RatingPipe();
    expect(() => {
      p.transform(10);
    }).toThrowError('Argument out of range');
  });
});
