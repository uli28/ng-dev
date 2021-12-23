import { Component, OnInit } from '@angular/core';
import { FoodService } from '../foodService/food.service';
import { FoodItem } from '../model/food-item.model';

@Component({
  selector: 'app-component-injection',
  templateUrl: './component-injection.component.html',
  styleUrls: ['./component-injection.component.scss'],
})
export class ComponentInjectionComponent implements OnInit {
  constructor(private fs: FoodService) {}

  food: FoodItem[];

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
