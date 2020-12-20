import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-css',
  templateUrl: './inline-css.component.html',
  styles: [
    `
      mat-card: {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class InlineCssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
