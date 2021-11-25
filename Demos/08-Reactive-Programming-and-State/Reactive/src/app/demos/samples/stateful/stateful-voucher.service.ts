import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { lateVoucher } from '../late-voucher';
import { Voucher } from '../model';

@Injectable({
  providedIn: 'root',
})
export class StatefulVoucherService {
  constructor(private httpClient: HttpClient) {
    this.initData();
    this.addLateVoucher();
  }

  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject([]);

  url = environment.apiUrl;

  private initData() {
    this.httpClient.get<Voucher[]>(this.url).subscribe((data) => {
      this.vouchers.next(data);
    });
  }

  addLateVoucher() {
    setTimeout(() => {
      var arr = this.vouchers.getValue();
      arr.push(lateVoucher as Voucher);
      this.vouchers.next(arr);
    }, 4000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map((arr) => arr.find((v) => v.ID == id)));
  }

  insertVoucher(v: Voucher): any {
    // send to db
    this.httpClient.post(this.url, v).subscribe((result: any) => {
      var arr = this.vouchers.getValue();
      arr.push(result as Voucher);
      this.vouchers.next(arr);
    });
  }

  updateVoucher(v: Voucher): any {}

  deleteVoucher(id: number) {
    var arr = this.vouchers.getValue();
    var updated = arr.filter((v) => v.ID != id);
    this.vouchers.next(updated);
  }
}
