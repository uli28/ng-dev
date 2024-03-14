import { Component, inject } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodStateService } from '../food-state.service';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [FoodListComponent, FoodEditComponent],
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

  // foodSaved(item: FoodItem) {
  //   const clone = Object.assign([], this.food) as Array<FoodItem>;
  //   let idx = clone.findIndex((c) => c.id == item.id);
  //   if (idx > -1) {
  //     clone[idx] = item;
  //     this.fs.updateFood(item).subscribe((data) => {
  //       console.log(data)
  //     });
  //   } else {
  //     clone.push(item);
  //     this.fs.addFood(item).subscribe((data) => {
  //       console.log(data)
  //     });
  //   }
  //   this.food = clone;
  //   this.selectedFood = null;
  // }

  // addFood() {
  //   const id = this.food.reduce((accumulator: number, currFood: FoodItem) => {
  //     return (accumulator =
  //       accumulator > currFood?.id ? accumulator : currFood?.id);
  //   }, 0) + 1;
  //   const foodItem = new FoodItem();
  //   const maxId: number = this.food.reduce((accumulator: number, currFood: FoodItem) => {
  //     return (accumulator =
  //       accumulator > currFood?.id ? accumulator : currFood?.id);
  //   }, 0);
  //   const add : number = 1;
  //   foodItem.id = maxId + add;
  //   this.selectedFood = foodItem;
  // }
}
