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
    // cold observable - httpclient macht nichts ohne subscribe
    this.fs.deleteFood(food.id).subscribe((data) => {
      console.log(data);
      this.food = this.food.filter((f) => f.id !== food.id);
    });  
  }

  foodSaved(item: FoodItem) {
    const clone = Object.assign([], this.food) as Array<FoodItem>;
    let idx = clone.findIndex((c) => c.id == item.id);
    if (idx > -1) {
      clone[idx] = item;
      this.fs.updateFood(item).subscribe((data) => {
        console.log(data)
      });
    } else {
      clone.push(item);
      this.fs.addFood(item).subscribe((data) => {
        console.log(data)
      });
    }
    this.food = clone;
    this.selectedFood = null;
  }
}
