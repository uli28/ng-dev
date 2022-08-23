import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eslint',
  templateUrl: './eslint.component.html',
  styleUrls: ['./eslint.component.scss'],
})
export class EslintComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  awaitInArr() {
    function bar(thing: any) {
      return thing;
    }

    async function foo(things) {
      const results = [];
      for (const thing of things) {
        // Bad: each loop iteration is delayed until the entire asynchronous operation completes
        results.push(await bar(thing));
      }
      return results;
    }

    foo('abc');
  }
}
