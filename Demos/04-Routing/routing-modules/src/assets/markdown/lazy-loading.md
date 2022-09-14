Investigate `demos`-route in `app.routing.module.ts` and `demos.module.ts`:

```typescript
{
    path: 'demos',
    loadChildren: () =>
        import('./demos/demos.module').then((m) => m.DemosModule),
},
```