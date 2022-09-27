import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private user = this.fireAuth.authState.pipe(
    //using a side effect to update the token
    tap((user) => {
      if (user != null) {
        user.getIdToken().then((token) => this.token.next(token));
      } else {
        this.token.next('');
        // stay on the same route if auth is not enabled
        if (user == null && environment.authEnabled) {
          this.router.navigate(['/']);
        }
      }
    })
  );

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  getUser() {
    return this.user;
  }

  getToken() {
    return this.token.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.pipe(
      map((user) => {
        let authEnabled = environment.authEnabled;
        return authEnabled == false || user != null ? true : false;
      })
    );
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log('Error creating User', err);
        return err;
      });
  }

  logIn(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log('Error logging in', err);
        return err;
      });
  }

  logOut() {
    this.fireAuth
      .signOut()
      // .then(() => {
      //   this.user.next(null);
      // })
      .catch((err) => console.log('Error in signOut', err));
  }
}
