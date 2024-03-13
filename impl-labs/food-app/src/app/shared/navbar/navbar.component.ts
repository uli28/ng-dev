import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { inject } from '@angular/core';
import { NavItem } from './nav-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarservice = inject(NavbarService);
  navItems: NavItem[] = [];

  ngOnInit() {
    this.navbarservice.getItems().subscribe((data) => {
      this.navItems = data;
    })
  }
}
