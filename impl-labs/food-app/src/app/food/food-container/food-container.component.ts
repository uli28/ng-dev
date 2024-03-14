import { Component, inject } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodItem } from '../food.model';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodStateService } from '../food-state.service';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [
    FoodListComponent,
    FoodEditComponent
  ],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.scss'
})
export class FoodContainerComponent {
  fs = inject(FoodStateService);
  food = this.fs.getFood();
  selectedFood: FoodItem | null = null;

  selectFood(food: FoodItem) {
    console.log('selecting food: ', food);
    this.selectedFood = { ...food };
  }

  deleteFood(food: FoodItem) {
    console.log('deleting food: ', food);
    this.fs.deleteFood(food.id);
  }

  foodSaved(item: FoodItem) {
    if (item.id === 0) {
      this.fs.insertFood(item);
    } else {
      this.fs.updateFood(item);
    }
    this.selectedFood = null;
  }

  addFood() {
    this.selectedFood = new FoodItem();
  }

  cancelEdit() {
    this.selectedFood = null;
  }
}
