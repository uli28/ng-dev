import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Observable, of, tap } from 'rxjs';
import { FirebaseAuthService } from './auth/firebase-auth.service';
import { LoadingService } from './shared/loading/loading.service';
import { MenuService } from './shared/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated: Observable<boolean> = of(false);
  title = 'Food App';
  mode: MatDrawerMode = 'side';

  constructor(
    public ms: MenuService,
    public ls: LoadingService,
    private auth: FirebaseAuthService
  ) {
    ms.sideNavPosition.subscribe((m) => (this.mode = m));
  }

  ngOnInit() {
    this.isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('auth changed to autheticated: ', auth)));
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
            'padding-left': '10px',
          }
        : {};
    });
    console.log('style:', result);
    return result;
  }
}
