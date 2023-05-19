import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `
    <div class="divclass">First Child</div>
    <h3>I am h3 in first child</h3>
    <div class="seehowctxworks">
      <app-nested-child></app-nested-child>
    </div>
  `,
  styles: [
    `.divclass {
        border: blue 4px solid;
      };
      h3 {
        margin: 2rem;
      };
    `
  ]
})
export class FirstChildComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
