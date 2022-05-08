Navigate to `demos/samples/stateful` and inverstigate `food-stateful.service.spec.ts` and its use of BehaviorSubject:

```typescript
export class FoodServiceStateful {
  constructor(private httpClient: HttpClient) {}

  private food: BehaviorSubject<FoodItem[]> = new BehaviorSubject<FoodItem[]>(
    []
  );
```

The stateful service is used in `stateful.component.ts`. The `StatefulComponent` is not formatted with Angular Material to keep the Test simpler.