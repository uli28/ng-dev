import { Component } from '@angular/core';
import { foodLoadData } from '../../foodService/food.mocks';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-testing-module-inline',
  template: `<div
    *ngFor="let f of food"
    (click)="deleteFood(f)"
    class="hoverclick"
  >
    {{ f.name }}
  </div>`,
  styles: ['.hoverclick {cursor: pointer;}'],
})
export class TestingModuleInlineComponent {
  food: FoodItem[] = foodLoadData;

  constructor() {}

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i: FoodItem) => i.name != food.name);
  }
}
