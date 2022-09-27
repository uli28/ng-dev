import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FirebaseAuthService } from './firebase-auth.service';
@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private as: FirebaseAuthService) {
    as.getToken().subscribe((t) => {
      this.token = t;
    });
  }

  token = '';

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (environment.authEnabled == false || this.token != '') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (environment.authEnabled == false || this.token != '') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
