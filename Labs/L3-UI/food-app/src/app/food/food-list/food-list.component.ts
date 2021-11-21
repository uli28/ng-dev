import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FoodItem } from "../foodItem";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"],
})
export class FoodListComponent implements OnInit, OnChanges {
  constructor() {}

  @Input()
  food: FoodItem[];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter();

  displayedColumns: string[] = ["id", "name", "price", "calories", "editItem"];
  dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource([]);

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(changes.food.currentValue);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectFood(p: FoodItem) {
    this.foodSelected.emit(p);
  }
}
