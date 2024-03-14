import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodService } from './food.service';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodStateService {
  http = inject(HttpClient);
  foodService = inject(FoodService);

  #food = signal<FoodItem[]>([]);
  nextId = computed(() => {
    const food = this.#food();
    return food.length > 0 ? Math.max(...food.map((f) => f.id)) + 1 : 1;
  });

  constructor() {
    this.foodService.getFood().subscribe((data) => {
      this.#food.set(data);
    });
  }

  getFood() {
    return computed(() => this.#food());
  }

  getFoodById(id: number) {
    return computed(() => this.#food()?.find((f) => f.id == id));
  }

  insertFood(food: FoodItem) {
    food.id = this.nextId();
    this.foodService.addFood(food).subscribe((data) => {
      this.#food.update((foods) => [...foods, data]);
    });
  }

  updateFood(f: FoodItem) {
    this.foodService.updateFood(f).subscribe((data) => {
      this.#food.update((foods) => {
        const index = foods.findIndex((f) => f.id === data.id);
        foods[index] = data;
        return foods;
      });
    });
  }

  deleteFood(id: number) {
    this.foodService.deleteFood(id).subscribe(() => {
      this.#food.update((foods) => foods.filter((f) => f.id !== id));
    });
  }
}
