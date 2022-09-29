Go to `demos/samples/component-testingmodule`. Notice that we are actually testing the nested `TestingModuleComponent` and that we are importing the modules used in this component. Also mention the use of NoopAnimationsModule vs BrowserAnimationsModule.

```typescript
beforeEach(async () => {
await TestBed.configureTestingModule({
    declarations: [TestingModuleComponent],
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NoopAnimationsModule,
    ],
}).compileComponents();
```

Notice also the different Testing approch between `TestingModuleInlineComponent` and `TestingModuleComponent` regarding the creation of the component instance and the use of `compileComponents()`