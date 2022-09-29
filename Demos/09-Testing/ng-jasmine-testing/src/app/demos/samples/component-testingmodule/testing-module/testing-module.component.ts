import { Component } from '@angular/core';
import { foodLoadData } from '../../foodService/food.mocks';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-testing-module',
  templateUrl: './testing-module.component.html',
  styleUrls: ['./testing-module.component.scss'],
})
export class TestingModuleComponent {
  food: FoodItem[] = foodLoadData;
  foodToAdd: FoodItem | null = null;

  constructor() {}

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i: FoodItem) => i.name != food.name);
  }

  addFood(food: FoodItem | null) {
    if (food) {
      let arr = [...this.food];
      arr.push({ name: food, rating: 0 } as unknown as FoodItem);
      this.food = arr;
      this.foodToAdd = null;
    }
  }
}
