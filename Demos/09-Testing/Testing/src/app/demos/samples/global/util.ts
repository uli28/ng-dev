import { Voucher } from './voucher.model';
export class Util {
  greet(): string {
    return 'Hello World!';
  }

  validate(voucher: Voucher) {
    let detailSumOk: boolean = false;
    if (voucher.Details != null) {
      let sumD = 0;
      for (const vd of voucher.Details) {
        sumD += vd.Amount;
      }
      detailSumOk = sumD == voucher.Amount;
    }
    return detailSumOk;
  }

  log(msg: string) {
    console.log(`logging: ${msg}`);
  }
}
