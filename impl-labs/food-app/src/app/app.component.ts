import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgStyle } from '@angular/common';
import { SideMenuService } from './shared/sidemenu/sidemenu.service';
import { environment } from '../environments/environment.development';
import { inject, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    FoodContainerComponent,
    MatSidenavModule,
    NgStyle,
    SidemenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nav = inject(SideMenuService);
  title = environment.title;

  navPosition = this.nav.getSideNavPosition();
  navVisible = this.nav.getSideNavVisible();
  workbenchMargin = {};

  constructor() {
    effect(() => {
      this.workbenchMargin = this.navVisible() ? { 'margin-left': '0.5rem' } : {};
    })
  }
}
