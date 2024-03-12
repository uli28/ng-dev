import { Injectable, inject } from '@angular/core';
import { FoodItem } from './food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  http = inject(HttpClient);

  getFood() {
    return this.http.get<FoodItem[]>(environment.foodApiUrl);
  }
}
