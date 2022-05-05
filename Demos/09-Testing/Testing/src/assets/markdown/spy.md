- Navigate to folder `\demos\samples\spy` and notice the use of the spy object in `better.service.spec.ts`

```javascript
util = jasmine.createSpyObj('Util', ['log']);
```
and

```javascript
expect(util.log).toHaveBeenCalledTimes(2);
```

