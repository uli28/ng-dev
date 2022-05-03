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
- Quit `json-server` using `CTRL+C`
- Select "Stateful Service" in the left Demo Menu. Watch the loading indicator.