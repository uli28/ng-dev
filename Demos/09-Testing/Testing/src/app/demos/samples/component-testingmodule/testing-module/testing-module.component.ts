import { Component } from '@angular/core';
import { foodLoadData } from '../../foodService/food.service.mocks';
import { FoodItem } from '../../service-http-injection/food.model';

@Component({
  selector: 'app-testing-module',
  templateUrl: './testing-module.component.html',
  styleUrls: ['./testing-module.component.scss'],
})
export class TestingModuleComponent {
  food: FoodItem[] = foodLoadData;

  constructor() {}

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i: FoodItem) => i.name != food.name);
  }
}
