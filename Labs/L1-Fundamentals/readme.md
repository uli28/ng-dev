# Food App -Food List

Implement a food list with a simple edit from. Do not invest too much time in formatting. We will use Angular Material later on. 

![food-list](_images/food-list.png)

Use the following nested components:

- food/food-container -> container
- food/food-list -> nested in container
- food/food-edit -> nested in container

Add `food-container` to `app.component`. Routing will be implemented later on. Example:

```
ng g component food/food-container
```

Add a `food-item.ts` file to folder `app/food`:

```typescript
export class FoodItem {
  id: number;
  name: string;
  price: number;
  calories: number;
}
```

Implement a food/food-service using the following food-item model:

```
ng g service food/food
```

Implement a `getFood()` method in food-service and load the data from `assets/food.json`:

```json
[
  { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },
  { "id": 2, "name": "Curry Wurst", "price": 2.7, "calories": 730 },
  { "id": 3, "name": "Blini with Salmon", "price": 8.3, "calories": 600 }
]
```

