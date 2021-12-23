import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../service-http-injection/food.model';

@Component({
  selector: 'app-testing-module',
  templateUrl: './testing-module.component.html',
  styleUrls: ['./testing-module.component.scss'],
})
export class TestingModuleComponent {
  food: FoodItem[] = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
    { name: 'Cordon Bleu', rating: 2 },
  ];

  constructor() {}

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i: FoodItem) => i.name != food.name);
  }
}
