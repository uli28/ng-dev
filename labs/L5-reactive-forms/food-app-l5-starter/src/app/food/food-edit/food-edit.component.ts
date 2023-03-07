import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent {
  constructor() { }

  @Input() food: FoodItem = new FoodItem();
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['food']) {
      console.log("@Input food changed: ", changes['food'].currentValue);
    }
  }

  doSave() {
    console.log("food to save", this.food);
    this.saveFood.emit(this.food);
  }
}
