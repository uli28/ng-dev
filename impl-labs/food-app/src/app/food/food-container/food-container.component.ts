import { Component, inject } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';
import { FoodEditComponent } from '../food-edit/food-edit.component';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [FoodListComponent, FoodEditComponent],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.scss'
})
export class FoodContainerComponent {
  fs = inject(FoodService);
  food: FoodItem[] = [];
  selectedFood: FoodItem | null = null;

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(food: FoodItem) {
    console.log('selecting food: ', food);
    this.selectedFood = { ...food };
  }

  deleteFood(food: FoodItem) {
    console.log('deleting food: ', food);
  }

  foodSaved(item: FoodItem) {
    const clone = Object.assign([], this.food) as Array<FoodItem>;
    let idx = clone.findIndex((c) => c.id == item.id);
    if (idx > -1) {
      clone[idx] = item;
    } else {
      clone.push(item);
    }
    this.food = clone;
    this.selectedFood = null;
  }
}
