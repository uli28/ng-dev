# Reactive Programming

[RxJS Home](https://rxjs.dev/)

[ReactiveX home](http://reactivex.io/)

[Rx Marbles](https://rxmarbles.com/)

[Learn RxJS Operators](https://www.learnrxjs.io/operators/)

[Full List of DOM-Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Subsink

[Subsink](https://github.com/wardbell/subsink)

Usage:

```typescript
 this.subs.sink = observable$.subscribe(...);
```

```typescript
ngOnDestroy() {
    this.subs.unsubscribe();
}
```
