import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { inject } from '@angular/core';
import { NavItem } from './nav-item.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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
