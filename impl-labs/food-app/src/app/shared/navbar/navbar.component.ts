import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { inject } from '@angular/core';
import { NavItem } from './nav-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuService } from '../sidemenu/sidemenu.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarService = inject(NavbarService);
  sideMenuService = inject(SideMenuService);
  navVisible = this.sideMenuService.getSideNavVisible();
  navItems = this.navbarService.getItems();

  toggleMenu() {
    this.sideMenuService.toggleMenuVisibility();
  }
}
