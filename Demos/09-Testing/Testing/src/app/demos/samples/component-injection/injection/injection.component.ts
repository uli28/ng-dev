import { Component, OnInit } from '@angular/core';
import { FoodServiceStateful } from '../../foodService/food-stateful.service';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss'],
})
export class InjectionComponent implements OnInit {
  constructor(private fs: FoodServiceStateful) {}

  food: FoodItem[];

  ngOnInit() {
    this.fs.getItems().subscribe((data: FoodItem[]) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteItem(food);
  }
}
