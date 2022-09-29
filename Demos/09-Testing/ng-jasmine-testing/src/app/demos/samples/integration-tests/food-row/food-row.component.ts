import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodItem } from '../../foodService/food.model';

@Component({
  selector: 'app-food-row',
  templateUrl: './food-row.component.html',
  styleUrls: ['./food-row.component.scss'],
})
export class FoodRowComponent {
  @Input() food: FoodItem = new FoodItem();
  @Output() onDelete: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output() onSelect: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  deleteFood(item: FoodItem) {
    this.onDelete.emit(item);
  }

  editFood(item: FoodItem) {
    this.onSelect.emit(item);
  }
}
