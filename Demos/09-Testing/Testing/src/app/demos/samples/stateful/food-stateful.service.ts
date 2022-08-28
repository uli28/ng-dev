import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from '../foodService/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceStateful {
  constructor(private httpClient: HttpClient) {}

  private food: BehaviorSubject<FoodItem[]> = new BehaviorSubject<FoodItem[]>(
    []
  );

  getAllFood() {
    if (this.food.value.length == 0) {
      this.httpClient
        .get<FoodItem[]>(`${environment.api}food`)
        .subscribe((data) => {
          this.food.next(data);
        });
    }
    return this.food.asObservable();
  }

  deleteFood(item: FoodItem) {
    this.httpClient
      .delete<void>(`${environment.api}food/${item.id}`)
      .subscribe(() => {
        let arr = this.food.value.filter((f) => f.id != item.id);
        this.food.next(arr);
      });
  }

  addFood(item: FoodItem) {
    this.httpClient
      .post<FoodItem>(`${environment.api}food`, item)
      .subscribe((data) => {
        let arr = this.food.value;
        arr.push(data);
        this.food.next(arr);
      });
  }
}
