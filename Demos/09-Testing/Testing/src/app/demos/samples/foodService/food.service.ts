import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from '../foodService/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  getAllFood(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>(`${environment.api}food`);
  }

  deleteFood(item: FoodItem) {
    return this.httpClient.delete(`${environment.api}food/${item.id}`);
  }

  addFood(item: FoodItem): Observable<FoodItem> {
    return this.httpClient.post<FoodItem>(`${environment.api}food`, item);
  }
}
