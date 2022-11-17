import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../foodService/food.model';

@Component({
  selector: 'app-component-class',
  template: `<app-markdown-renderer
      [md]="'component-class'"
    ></app-markdown-renderer>
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>ComponentClassComponent</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <h1>{{ title }}</h1>
        <div *ngFor="let f of food">{{ f.name }}</div>
      </mat-card-content>
    </mat-card>`,
  styles: ['h1 { color: green; font-size: 2rem}'],
})
export class ComponentClassComponent implements OnInit {
  title = '';
  food: FoodItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.title = 'Food App';
    this.food = [
      { id: 2, name: 'Pad Thai', rating: 1 },
      { id: 3, name: 'Butter Chicken', rating: 2 },
    ];
  }

  add(f: FoodItem) {
    this.food.push(f);
  }
}
