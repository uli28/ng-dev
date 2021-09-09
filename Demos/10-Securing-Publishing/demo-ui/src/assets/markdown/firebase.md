Notice that this sample has been used to its own module fbauth.module.ts to allow usage in AppRoot

To be able to use Firebase Auth you must:

- Create an account at [Firebase](https://firebase.google.com/)
- Update your Firebase Config in environment.ts

```
firebaseConfig: {
   ...
},
```

> Note: Don't check in this config into source control - mine will be deleted after this presentation!

When using together with .NET Core Api register FirebaseInterceptor
