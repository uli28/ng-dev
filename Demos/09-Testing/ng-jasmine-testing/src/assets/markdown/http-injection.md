- food.service.ts has an injection of an `Angular HttpClient` that needs to be handled. Navigate to `demos\samples\foodService` and inverstigate `food.service.spec.ts` and its use of HttpClientTestingModule and HttpTestingController.

```javascript
it('should return the initial load data', () => {
    fs.getAllFood().subscribe((data) => {
        expect(data).toBeTruthy();
        expect(data.length).toBe(4);
        const firstFood = data.find((f) => f.id == 2);
        expect(firstFood).toEqual(foodQueryItem);
    });
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(foodLoadData);
    controller.verify();
});
```
