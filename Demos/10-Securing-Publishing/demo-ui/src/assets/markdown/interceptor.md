Examine the intercept method in `firebase.interceptor.ts`:

```typescript
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.token.pipe(
      switchMap((token) => {
        if (token != '') {
          const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
          });
          return next.handle(authReq);
        } else {
          return next.handle(req);
        }
      })
    );
  } 
```

The interceptor is registered in `demo.module.ts`:

```typescript
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseInterceptor,
      multi: true,
    },
  ],
```