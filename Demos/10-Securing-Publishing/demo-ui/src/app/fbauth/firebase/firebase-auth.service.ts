import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private token: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private user: BehaviorSubject<firebase.default.User | null> =
    new BehaviorSubject<firebase.default.User | null>(null);
  // public User = this.user.asObservable();

  constructor(private fireAuth: AngularFireAuth) {
    this.onUserChanged();
  }

  private onUserChanged() {
    this.fireAuth.authState.subscribe((user) => {
      this.user.next(user);
      user != null
        ? user.getIdToken().then((token) => this.token.next(token))
        : this.token.next('');
    });
  }

  getUser() {
    return this.user.asObservable();
  }

  getToken() {
    return this.token.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.pipe(
      map((user) => {
        return user == null ? false : true;
      })
    );
  }

  registerUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log('Error in registerUser', err);
        return err;
      });
  }

  logOn(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log('Error in logOn', err);
        return err;
      });
  }

  signOut() {
    this.fireAuth
      .signOut()
      .then(() => {
        this.user.next(null);
      })
      .catch((err) => console.log('Error in signOut', err));
  }
}
