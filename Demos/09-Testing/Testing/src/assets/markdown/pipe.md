Navigate to folder `\demos\samples\pipe`

Investigate `test-pipe.component.ts` and `test-pipe.component.spec.ts`

Notice code to test a method of a pipe:

```javascript
it("returns 'ausgezeichnet' when 2 is passed", () => {
    expect(p.transform(2)).toEqual('ausgezeichnet');    
});
```