import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Observable, tap } from 'rxjs';
import { NavItem } from '../navbar/nav-item.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  http = inject(HttpClient);
  breakpointObserver = inject(BreakpointObserver);
  visible = signal(true);
  position = signal<MatDrawerMode>('side');
  
  constructor() {
    this.watchScreen.subscribe();
   }

   getSideNavVisible() {
    return computed(() => this.visible());
   }

   getSideNavPosition() {
    return computed(() => this.position());
   }

   watchScreen = this.breakpointObserver
   .observe([Breakpoints.XSmall, Breakpoints.Small])
   .pipe(
    tap((matchesBreakpoint) => {
      console.log(matchesBreakpoint);
      this.visible.set(matchesBreakpoint.matches ? false : true);
      this.position.set(matchesBreakpoint.matches ? 'over' : 'side');
    })
   )

   setSideNavEnabled(isSideNavEnabled: boolean) {
    this.visible.set(isSideNavEnabled);
   }

   adjustSidenavToScreen(mq: string): boolean {
    return mq === 'xs' ? false : true;
   }

   toggleMenuVisibility() {
    this.visible.update((current) => !current);
   }

   getTopItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(`${environment.apiUrl}top-links`);  
   }
}
