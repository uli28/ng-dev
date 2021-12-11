import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MenuService } from './shared/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = environment.title;
  mode: MatDrawerMode = 'side';

  constructor(private titleService: Title, public ms: MenuService) {
    ms.postition.subscribe((m) => (this.mode = m));
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
