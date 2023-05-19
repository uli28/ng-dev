import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-responsive-screen',
  templateUrl: './responsive-screen.component.html',
  styleUrls: ['./responsive-screen.component.scss']
})
export class ResponsiveScreenComponent {
  watcher: Subscription | null = null;
  mq: string = '';
  isPhone: boolean = false;
  isTablet: boolean = false;

  getClass() {
    return this.isPhone ? 'phoneClass' : 'notPhoneClass';
  }
}
