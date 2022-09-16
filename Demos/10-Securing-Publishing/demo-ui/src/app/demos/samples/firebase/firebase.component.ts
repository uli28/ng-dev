import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseAuthService } from '../../../fbauth/firebase/firebase-auth.service';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent implements OnInit {
  constructor(private httpClient: HttpClient, public as: FirebaseAuthService) {}

  currentUser: firebase.default.User | null = null;
  resp: any;

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  callCoreApi() {
    this.httpClient
      .get(`${environment.api}demo`)
      .pipe(
        map((data) => {
          this.resp = data;
        }),
        catchError((err) => {
          this.resp = err;
          return err;
        })
      )
      .subscribe();
  }

  logOut() {
    this.as.signOut();
  }
}
