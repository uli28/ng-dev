import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { lateVoucher } from './late-voucher';
import { Voucher } from './vouchers.model';

@Injectable({
  providedIn: 'root',
})
export class StatefulVoucherService {
  http = inject(HttpClient);
  // javascript anotation für private variable. damit sonst niemad das next triggern kann außerhalb dieses service
  #vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject<Voucher[]>([]);

  constructor() {
    this.http.get<Voucher[]>(`${environment.api}vouchers`).subscribe((data) => {
      this.#vouchers.next(data);
    });

    setTimeout(() => {
      var arr = this.#vouchers.getValue();
      arr.push(lateVoucher as Voucher);
      // next informiert alle subscribieren, emmite ein neue marbel
      this.#vouchers.next(arr); 
    }, 6000);
  }

  getAllVouchers() {
    return this.#vouchers.asObservable();
  }

  getVoucherById(id: number) {
    return this.#vouchers.pipe(map((arr) => arr.find((v) => v.ID == id)));
  }

  insertVoucher(v: Voucher) {
    this.http.post(environment.api, v).subscribe((result: any) => {
      var arr = this.#vouchers.getValue();
      arr.push(result as Voucher);
      this.#vouchers.next(arr);
    });
  }

  updateVoucher(v: Voucher) { }

  deleteVoucher(id: number) {
    var arr = this.#vouchers.getValue();
    var updated = arr.filter((v) => v.ID != id);
    this.#vouchers.next(updated);
  }
}
