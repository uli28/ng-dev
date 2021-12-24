import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { foodAddItem } from '../../foodService/food.mocks';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-food-http',
  templateUrl: './food-http.component.html',
  styleUrls: ['./food-http.component.scss'],
})
export class FoodHttpComponent implements OnInit {
  constructor(private fs: FoodService) {}

  ngOnInit(): void {}

  addFood() {
    this.fs.addFood(foodAddItem as FoodItem);
  }

  getFood() {
    this.fs.getAllFood().subscribe((food) => console.log(food));
  }
}
