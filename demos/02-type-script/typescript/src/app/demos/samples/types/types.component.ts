import { Component } from '@angular/core'; // ES 6 module import
import { Voucher } from '../voucher.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class TypesComponent {

  basicVariables() {
    const personName: string = 'Alex';

    // Numbers
    const age: number = 54;

    const weight = 98.12;
    // weight = 11; //re-assignment to const

    let dogWeight = 25.4;
    // dogWeight = "heavy"; //string assignment to number

    const rand = Math.random();

    const numbers: number[] = [];
    const myNumArray: Array<number> = new Array<number>();

    numbers[0] = 1;
    // numbers.push("two"); // compile-time error

    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false; // okay, definitely a boolean

    const isCustomer = false;
    const finished = false;

    // strings
    const dogName = 'Giro';
    const otherDogName = 'Soi';
    const myString = 'ten';

    const strings: Array<string> = ['hubert', 'Sam'];
    strings.push('Hans');
    // strings[1] = 1337; // compile time error
  }

  useLetConst() {
    const index = 0;
    const array = ['a', 'b', 'c'];

    //anti pattern
    for (let index = 0; index < array.length; index++) {
      console.log('index:' + index);
      console.log('item:' + array[index]);
    }

    //use this if you don't need the index for something else
    for (let item of array) {
      console.log(item);
    }

    const person = { name: 'john', age: 22 };
    person.name = 'franz';
  }

  useVoid() {
    function handleClick(): void {
      const g = "I don't return anything.";
      console.log(g);
      // return g;
    }

    handleClick();
  }

  useEnums() {

    // classic enum -> anti pattern 
    enum StateOfMind {
      happy = 2,
      unhappy = 4,
      ok = 6,
    }

    // preferred
    type stateOfMind = "happy" | "unhappy" | "ok";

    const isHappy: StateOfMind = StateOfMind.happy;

    enum Sex {
      male = 'm',
      female = 'f',
      divers = 'd',
    }

    enum VoucherStatus {
      draft,
      complete,
      pending,
    }

    function handleVoucher(v: Voucher, status: VoucherStatus) {
      switch (status) {
        case VoucherStatus.complete:
          console.log(`got voucher ${v}: will pay`);
          break;
        case VoucherStatus.draft:
          console.log(`got voucher ${v}: will save to O365`);
          break;
        case VoucherStatus.pending:
          console.log(`got voucher ${v}: will call the accountant`);
          break;
        default:
          console.log('...');
          break;
      }
    }

    const v: Voucher = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Paid: false,
      Date: new Date().toDateString(),
      Expense: true,
    } as Voucher;

    handleVoucher(v, VoucherStatus.draft);
  }

  literalTypes() {
    type choice = 'ok' | 'not bad';

    function processChoice(ch: choice) {
      if (ch == 'ok') {
        console.log(`well ... you choose ${ch}`);
      }
    }

    processChoice('ok');
  }
}
