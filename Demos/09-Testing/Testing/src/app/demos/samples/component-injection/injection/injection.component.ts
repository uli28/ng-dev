import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../foodService/food.model';
import { FoodService } from '../../foodService/food.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss'],
})
export class InjectionComponent implements OnInit {
  constructor(private fs: FoodService) {}

  food: FoodItem[];

  ngOnInit() {
    this.fs.getAllFood().subscribe((data: FoodItem[]) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteFood(food);
  }
}
