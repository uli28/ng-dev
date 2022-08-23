import { Component, OnInit } from "@angular/core";
import { FoodService } from "src/app/food/food.service";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[] = [];
  selected: FoodItem | null = null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = f;
  }

  foodSaved(item: FoodItem) {
    this.food = this.food.filter((f) => f.id != item.id);
    this.food.push(item);
  }
}
