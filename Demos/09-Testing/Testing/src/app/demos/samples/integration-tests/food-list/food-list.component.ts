import { Component, OnInit } from '@angular/core';
import { FoodServiceStateful } from '../../foodService/food-stateful.service';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  food: FoodItem[];

  constructor(private fs: FoodServiceStateful) {}

  ngOnInit() {
    this.fs.getItems().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteItem(food);
  }
}
