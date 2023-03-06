import { Component } from '@angular/core';
import { Calculator, constKey } from './currency.functions';
import { MathFunctions } from './math.functions';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent {
  constructor() {}

  useModule() {
    const sqr = MathFunctions.square(3);
    console.log('3 square is ' + sqr);

    const calc = new Calculator();
    calc.add(1, 3);
  }

  useLocalStorage() {
    localStorage.setItem(constKey, 'the value');

    const val = localStorage.getItem(constKey);
  }
}
