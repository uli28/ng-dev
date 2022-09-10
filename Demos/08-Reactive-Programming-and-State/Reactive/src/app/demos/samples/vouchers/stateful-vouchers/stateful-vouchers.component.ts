import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { combineLatestWith, map, startWith, tap } from 'rxjs';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../voucher.model';

@Component({
  selector: 'app-stateful-vouchers',
  templateUrl: './stateful-vouchers.component.html',
  styleUrls: ['./stateful-vouchers.component.scss'],
})
export class StatefulVouchersComponent implements OnInit {
  filter$ = new FormControl<string>('', { nonNullable: true });
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount', 'deleteItem'];

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs
      .getAllVouchers()
      .pipe(
        // initialization: startWith('') will emit an empty string to the stream
        combineLatestWith(this.filter$.valueChanges.pipe(startWith(''))),
        map(([vouchers, filter]) => {
          return filter == ''
            ? vouchers
            : vouchers.filter((v) => v.Text.includes(filter));
        })
      )
      .subscribe(
        (vouchers) => (this.dataSource = new MatTableDataSource(vouchers))
      );

    // Imperative approach
    // this.vs.getAllVouchers().subscribe((data) => {
    //   this.dataSource = new MatTableDataSource(data);
    // });

    // this.filter.valueChanges.subscribe((filterValue) => {
    //   if (filterValue) {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    //   }
    // });
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }

  deleteVoucher(v: Voucher) {
    this.vs.deleteVoucher(v.ID);
  }
}
