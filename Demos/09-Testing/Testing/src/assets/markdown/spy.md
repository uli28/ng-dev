### Using Jasmine Spy

Navigate to folder `\demos\samples\spy` and notice the use of 

```javascript
util = jasmine.createSpyObj('Util', ['log']);
```
and

```javascript
expect(util.log).toHaveBeenCalledTimes(2);
```

in  `better.service.spec.ts`