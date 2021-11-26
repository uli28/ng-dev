import { VoucherValidator } from './voucher-validator';
import { goodvoucher, badvoucher, nullVoucher } from './voucher.mock';
import { Voucher } from './voucher.mode';

describe('Testing a simple Calss: VoucherValidator', () => {
  beforeEach(() => {});

  it('returns true when correct data is passed', () => {
    let v: Voucher = goodvoucher as unknown as Voucher;
    expect(VoucherValidator.validate(v)).toEqual(true);
  });

  it('returns false when bad data is passed', () => {
    let v: Voucher = badvoucher as unknown as Voucher;
    expect(VoucherValidator.validate(v)).toEqual(false);
  });

  it('returns false when null is passed as Details', () => {
    let v: Voucher = nullVoucher as unknown as Voucher;
    expect(VoucherValidator.validate(v)).toEqual(false);
  });
});
