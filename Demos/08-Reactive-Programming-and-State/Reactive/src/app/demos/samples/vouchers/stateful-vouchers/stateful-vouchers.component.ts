import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../voucher.model';

@Component({
  selector: 'app-stateful-vouchers',
  templateUrl: './stateful-vouchers.component.html',
  styleUrls: ['./stateful-vouchers.component.scss'],
})
export class StatefulVouchersComponent implements OnInit {
  filter = new FormControl<string>('');
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount', 'deleteItem'];

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs.getAllVouchers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    });
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }

  deleteVoucher(v: Voucher) {
    this.vs.deleteVoucher(v.ID);
  }
}
