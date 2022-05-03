- Examine loading.service.ts

```typescript
export class LoadingService {
  private isLoading = new BehaviorSubject(false);
  constructor() {}

  getLoading() {
    return this.isLoading;
  }

  setLoading(loading: boolean) {
    this.isLoading.next(loading);
  }
}
```
- Examine loading-interceptor.ts and discuss its implementation
- Reload page and select "Stateful Service" in the Detail Menu. Watch the loading indicator.
- You might have to throttle the loading to see the indicator