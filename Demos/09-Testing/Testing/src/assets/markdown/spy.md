### Using Jasmine Spy

Navigate to folder `\demos\samples\spy` and notice the use of 

```
util = jasmine.createSpyObj('Util', ['log']);
```
and

```
expect(util.log).toHaveBeenCalledTimes(2);
```

in  `better.service.spec.ts`