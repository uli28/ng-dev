Navigate to folder `\demos\samples\use-mock`

Investigate `auth.service.ts`, `UseMockComponent` and `use-mock.component.spec.ts`

Learn how to inject a mock implementation into the `TestingModule` by using `providers` and `useValue`:

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