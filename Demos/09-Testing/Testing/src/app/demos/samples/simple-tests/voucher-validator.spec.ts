import { VoucherValidator } from './voucher-validator';
import { goodvoucher, badvoucher, nullVoucher } from './voucher.mock';

describe('Testing a simple Calss: VoucherValidator', () => {
  beforeEach(() => {});

  it('returns true when correct data is passed', () => {
    let v = goodvoucher;
    expect(VoucherValidator.validate(v)).toEqual(true);
  });

  it('returns false when bad data is passed', () => {
    expect(VoucherValidator.validate(badvoucher)).toEqual(false);
  });

  it('returns false when null is passed as Details', () => {
    expect(VoucherValidator.validate(nullVoucher)).toEqual(false);
  });
});
