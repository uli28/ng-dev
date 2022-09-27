import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';
import { FirebaseAuthService } from '../../../fbauth/firebase-auth.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent implements OnInit {
  constructor(private httpClient: HttpClient, public as: FirebaseAuthService) {}

  currentUser: firebase.default.User | null = null;

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  logOut() {
    this.as.logOut();
  }
}
