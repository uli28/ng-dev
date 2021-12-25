import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-events',
  templateUrl: './component-events.component.html',
  styleUrls: ['./component-events.component.scss'],
})
export class ComponentEventsComponent {
  constructor() {}

  count = 0;

  incrementCount() {
    this.count += 1;
  }
}
