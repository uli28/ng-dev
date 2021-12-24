import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FoodItem } from './food.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceStateful {
  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  private Items: BehaviorSubject<FoodItem[]> = new BehaviorSubject<FoodItem[]>(
    []
  );

  private loadData() {
    this.httpClient
      .get<FoodItem[]>(`${environment.api}food`)
      .subscribe((data) => {
        this.Items.next(data);
      });
  }

  getItems(): Observable<FoodItem[]> {
    return this.Items;
  }

  async deleteItem(item: FoodItem) {
    await this.httpClient
      .delete<void>(`${environment.api}food/${item.id}`)
      .subscribe((resp) => {
        let arr = this.Items.value.filter((f) => f != item);
        this.Items.next(arr);
      });
    return of(true);
  }

  async addItem(item: FoodItem) {
    await this.httpClient
      .post<FoodItem>(`${environment.api}food`, item)
      .subscribe((data) => {
        let arr = this.Items.value;
        arr.push(data);
        this.Items.next(arr);
      });
    return of(true);
  }
}
