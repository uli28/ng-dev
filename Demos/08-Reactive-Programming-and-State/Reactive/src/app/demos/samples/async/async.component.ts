import { Component, OnInit, OnDestroy } from '@angular/core';
import { VouchersService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/voucher.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent implements OnInit, OnDestroy {
  constructor(private vs: VouchersService) {}

  // Declarative Pattern
  vouchers$ = this.vs.getVouchers();

  // Classic Subscribe Pattern
  vouchers: Voucher[];
  subsVouchers: Subscription;

  ngOnInit() {
    this.getDataClassic();
  }

  ngOnDestroy(): void {
    this.subsVouchers.unsubscribe();
  }

  getDataClassic() {
    this.subsVouchers = this.vs.getVouchers().subscribe((data) => {
      this.vouchers = data;
    });
  }
}
