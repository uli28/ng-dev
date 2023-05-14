import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SnackbarService } from './shared/snackbar/snackbar.service';

@Injectable()
export class IsAuthRouteGuard  {
  allowAccess: boolean = !environment.authEnabled;
  constructor(private router: Router, private sns: SnackbarService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.allowAccess) {
      return true;
    } else {
      this.sns.displayAlert('Hey Dude', 'You are not allowed in here');
      this.router.navigate(['/']);
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
