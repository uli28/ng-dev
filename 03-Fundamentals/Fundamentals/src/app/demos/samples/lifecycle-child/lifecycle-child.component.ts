import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
})
export class LifecycleChildComponent implements OnInit, OnChanges {
  constructor() {
    console.log('constructor child');
  }

  ngOnInit(): void {
    console.log('ngOnInit child');
  }

  ngOnChanges() {
    console.log('ngOnChanges child');
  }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
}
