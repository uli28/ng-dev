import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../foodService/food.model';
import { FoodService } from '../../foodService/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  food: FoodItem[] = [];

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getAllFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food).subscribe(() => {
      this.food = this.food.filter((f) => f.id != food.id);
    });
  }
}
