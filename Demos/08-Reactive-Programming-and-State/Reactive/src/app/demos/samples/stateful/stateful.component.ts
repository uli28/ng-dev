import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StatefulVoucherService } from '../../../shared/vouchers/stateful-voucher.service';
import { Voucher } from '../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.scss'],
  providers: [StatefulVoucherService],
})
export class StatefulComponent implements OnInit {
  filter = new FormControl('');
  vouchers = this.vs.getAllVouchers();
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount', 'deleteItem'];

  // vouchers$ = combineLatest([
  //   this.demosData$,
  //   this.filter$.valueChanges.pipe(startWith('')),
  // ]).pipe(
  //   map(([demos, filter]) => {
  //     return filter != ''
  //       ? demos.filter((d) =>
  //           d.title.toLowerCase().includes(filter.toLowerCase())
  //         )
  //       : demos;
  //   })
  // );

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs.getAllVouchers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }

  deleteVoucher(v: Voucher) {
    this.vs.deleteVoucher(v.ID);
  }
}
