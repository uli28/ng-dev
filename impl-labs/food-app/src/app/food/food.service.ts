import { Injectable, inject } from '@angular/core';
import { FoodItem } from './food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  http = inject(HttpClient);
  private url = environment.apiUrl+ 'food';

  getFood() {
    return this.http.get<FoodItem[]>(this.url);
  }

  getCertainFood(id: number) {
    return this.http.get<FoodItem>(`${this.url}/${id}`);
  }

  addFood(foodItem: FoodItem) {
    return this.http.post<FoodItem>(`${this.url}`, foodItem);
  }

  deleteFood(id: number) {
    return this.http.delete<FoodItem>(`${this.url}/${id}`);
  }

  updateFood(foodItem: FoodItem) {
    return this.http.put<FoodItem>(`${this.url}/${foodItem.id}`, foodItem);
  }
}
