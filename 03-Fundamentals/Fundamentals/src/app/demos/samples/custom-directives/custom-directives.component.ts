import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss'],
})
export class CustomDirectivesComponent implements OnInit {
  @Output() changes = new EventEmitter();
  price: number;

  constructor() {}

  ngOnInit() {}

  changed(value) {
    this.changes.emit(value);
  }
}
