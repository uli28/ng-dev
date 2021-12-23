import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-class',
  template: `<app-markdown-renderer
      [md]="'component-class'"
    ></app-markdown-renderer>
    <mat-card>
      <mat-card-header>
        <mat-card-title>ComponentClassComponent</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <h1>{{ title }}</h1>
      </mat-card-content>
    </mat-card>`,
  styles: ['h1 { color: green; font-size: 2rem}'],
})
export class ComponentClassComponent implements OnInit {
  title = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'Food App';
  }
}
