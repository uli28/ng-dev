import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-css',
  templateUrl: './inline-css.component.html',
  styles: ['h1 { color:red }'],
})
export class InlineCssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
