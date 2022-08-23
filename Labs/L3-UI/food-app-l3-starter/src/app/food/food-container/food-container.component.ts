import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../food.model";
import { FoodService } from "../food.service";

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
    this.fs.getFood().subscribe((data: FoodItem[]) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = f;
  }

  foodSaved(item: FoodItem) {
    this.food = this.food.filter((f) => f.id != item.id);
    this.food.push(item);
  }
}
