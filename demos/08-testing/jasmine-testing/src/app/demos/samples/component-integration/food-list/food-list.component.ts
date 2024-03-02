import { Component, OnInit, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodSignalsService } from '../food-signals.service';
import { FoodItem } from '../food.model';

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

  fs = inject(FoodSignalsService);
  food = signal<FoodItem[]>([]);
  // food = signal([
  //   { name: 'Pad Thai', rating: 5 },
  //   { name: 'Butter Chicken', rating: 5 },
  //   { name: 'Cannelloni', rating: 4 },
  //   { name: 'Cordon Blue', rating: 2 },
  // ]);

  ngOnInit(): void {
    this.food.update(this.fs.getFood());
  }

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food);
  }
}
