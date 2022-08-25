Navigate to `demos/samples/stateful` and inverstigate `food-stateful.service.spec.ts` and its use of BehaviorSubject:

```typescript
export class FoodServiceStateful {
  constructor(private httpClient: HttpClient) {}
  private food: BehaviorSubject<FoodItem[]> = new BehaviorSubject<FoodItem[]>([]);
```

Notice how the methods manipulate the BehaviorSubject:

```typescript
getAllFood() {
  if (this.food.value.length == 0) {
    this.httpClient.get<FoodItem[]>(`${environment.api}food`)
      .subscribe((data) => {this.food.next(data);});
  }
  return this.food.asObservable();
}
```

Examine the tests in `food-stateful.service.spec.ts`.