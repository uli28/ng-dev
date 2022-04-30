import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-css',
  templateUrl: './inline-css.component.html',
  styles: [
    `
      button: {
        background-color: green;
      }
    `,
  ],
})
export class InlineCssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
