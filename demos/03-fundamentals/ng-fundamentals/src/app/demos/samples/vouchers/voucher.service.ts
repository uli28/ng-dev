import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Voucher } from './vouchers.model';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  constructor(private http: HttpClient) { }

  getVouchers() {
    return this.http.get<Voucher[]>(`${environment.api}vouchers`);
  }
}
