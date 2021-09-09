import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ADALService {
  constructor(private httpClient: HttpClient) {}

  user: any;
  adalToken = 'adalToken';

  logIn() {
    // this.adalSvc.login();
  }

  logOut() {
    // this.adalSvc.logout();
    // localStorage.setItem(this.adalToken, null);
  }

  query(endpoint: any, query: string, callback) {
    // this.adalSvc.acquireToken("graphApiUri").subscribe((token: string) => {
    //   localStorage.setItem(this.adalToken, token);
    //   let header = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       Accept: "application/json"
    //     }
    //   };
    //   this.httpClient
    //     .get(`${endpoint}${query}`, header)
    //     .subscribe(data => callback(data));
    // });
  }

  createEvent(item, query: string) {
    // this.adalSvc.acquireToken("graphApiUri").subscribe((token: string) => {
    //   localStorage.setItem(this.adalToken, token);
    //   let header = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       Accept: "application/json"
    //     }
    //   };
    //   this.httpClient
    //     .post(
    //       `${environment.o365Config.endpoints.graphApiUri}${query}`,
    //       item,
    //       header
    //     )
    //     .subscribe(data => console.log(data));
    // });
  }
}
