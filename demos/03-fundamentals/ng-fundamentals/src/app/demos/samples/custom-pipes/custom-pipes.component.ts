import { Component, OnInit } from '@angular/core';
import { Voucher } from '../vouchers/vouchers.model';
import { VouchersService } from '../vouchers/voucher.service';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss'],
})
export class CustomPipesComponent implements OnInit {
  isChecked = false;
  price = 12.33;
  vouchers: Voucher[] = [];

  currentFilter: string = '';

  constructor(private vs: VouchersService) {}

  ngOnInit() {
    this.vs
      .getVouchers()
      .subscribe((data: Voucher[]) => (this.vouchers = data));
  }

  showVoucher(id: number) {
    console.log(
      `navigating to voucher with id ${id} - covered later in more detail`
    );
  }
}
