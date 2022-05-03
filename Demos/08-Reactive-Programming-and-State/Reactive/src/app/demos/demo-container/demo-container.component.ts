import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../demo-base/demo-item.model';
import { DemoService } from '../demo-base/demo.service';
import { MatDrawerMode } from '@angular/material/sidenav';
import { EventBusService } from '../samples/evt-bus/event-bus.service';
import { SidebarActions } from '../samples/evt-bus/sidebar-actions';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  title: string = environment.title;
  header = 'Please select a demo';
  demos$: Observable<DemoItem[]>;
  sidenavMode: MatDrawerMode = 'side';
  showEditor = false;

  constructor(
    private router: Router,
    private demoService: DemoService,
    private route: ActivatedRoute,
    public ms: MenuService,
    public eb: EventBusService
  ) {
    this.title = 'Typescript';
  }

  ngOnInit() {
    this.setMenu();
    this.setMetadata();
    this.getWorbenchStyle();
    this.subscribeCommands();
  }

  subscribeCommands() {
    this.eb.getCommands().subscribe((action) => {
      this.showEditor = action == SidebarActions.SHOW_MARKDOWN ? true : false;
    });
  }

  setMenuPosition() {
    this.ms.position$.subscribe(
      (mode: any) => (this.sidenavMode = mode as MatDrawerMode)
    );
  }

  setMenu() {
    this.demos$ = this.demoService.getItems();
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.visible$.subscribe((visible: any) => {
      result = visible
        ? {
            'margin-left': '10px',
          }
        : {};
    });
    return result;
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  setMetadata() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.rootRoute(this.route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary')
      )
      .subscribe((route: ActivatedRoute) => {
        this.header =
          route.component != null
            ? `Component: ${route.component
                .toString()
                .substring(6, route.component.toString().indexOf('{') - 1)}`
            : '';
      });
  }
}
