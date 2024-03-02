import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodItem } from '../food.model';
import { FoodServiceState } from '../food.service-bs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    FoodRowComponent
  ],
})
export class FoodListComponent implements OnInit {
  fs = inject(FoodServiceState)
  food: FoodItem[] = [];

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteFood(food);
  }
}
