Navigate to folder `\demos\samples\simple-tests\`

Investigate `util.ts` and `util.spec.ts`

Find a list of matches at [Jasmine Docs](https://jasmine.github.io/api/edge/matchers.html)

Notice the First Test:

```typescript
describe('Simple Class: util.ts', () => {
  let util: Util;

  beforeEach(() => {
    util = new Util();
  });

  it('greeting contains 12 charactes', () => {
    expect(util.greet().length).toEqual(12);
  });
```

Run the Test using `ng test`
