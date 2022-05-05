- Navigate to folder `\demos\samples\use-mock`
- Investigate `auth.service.ts`, `use-mock.component.ts` and `use-mock.component.spec.ts`.
- A component fixture is a test harness for interacting with the created component and its corresponding element.
- A testbed allows us to create the component and its supporting module.
- Learn how to inject a mock implementation into the `TestingModule` by using `providers` and `useValue`:

```javascript
beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [UseMockComponent],
        providers: [{ provide: AuthService, useValue: ms }],
    }).compileComponents();

    fixture = TestBed.createComponent(UseMockComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
});
```