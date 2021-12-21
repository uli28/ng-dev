import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Util } from './util';
import { badvoucher, goodvoucher, nullVoucher } from './voucher.mock';
import { Voucher } from './voucher.model';

describe('Simple Class: util.ts', () => {
  let util: Util;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Util],
    });
    util = TestBed.inject(Util);
    spyOn(window.console, 'log');
  });

  it('greeting contains 12 charactes', () => {
    expect(util.greet().length).toEqual(12);
  });

  it("greeting says 'Hello World!", () => {
    expect(util.greet()).toEqual('Hello World!');
  });

  it('returns true when correct data is passed to validate', () => {
    let v: Voucher = goodvoucher as unknown as Voucher;
    expect(util.validate(v)).toEqual(true);
  });

  it('returns false when bad data is passed to validate', () => {
    let v: Voucher = badvoucher as unknown as Voucher;
    expect(util.validate(v)).toEqual(false);
  });

  it('returns false when null is passed as Details to validate', () => {
    let v: Voucher = nullVoucher as unknown as Voucher;
    expect(util.validate(v)).toEqual(false);
  });

  it('should log to console', () => {
    util.log('abc');
    expect(window.console.log).toHaveBeenCalled();
  });
});
