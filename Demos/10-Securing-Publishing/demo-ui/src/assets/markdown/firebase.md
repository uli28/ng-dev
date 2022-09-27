Notice that this sample has been used to its own module fbauth.module.ts to allow usage in AppRoot

To be able to use Firebase Auth you must:

- Create an account at [Firebase](https://firebase.google.com/)
- Update your Firebase Config in `environment.ts`

   ```json
   firebaseConfig: {...},
   ```

- Examine `firebase-auth.service.ts` and its usage in `register.component.ts` and `login.component.ts`