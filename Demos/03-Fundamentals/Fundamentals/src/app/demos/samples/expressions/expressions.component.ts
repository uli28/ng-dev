import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.scss'],
})
export class ExpressionsComponent implements OnInit {
  constructor() {}

  title = 'Expressions & Interpolation';
  nbr = 7;
  isFalse = false;
  myObj = { a: 10, b: 20 };
  divVisible = true;

  ngOnInit() {}

  addNumbers(a: number, b: number) {
    return a + b;
  }

  showDiv() {
    return this.divVisible;
  }
}
