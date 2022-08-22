import { Component, OnInit } from '@angular/core'; // ES 6 module import
import * as moment from 'moment'; // Non ES6 Moduel import
import { Voucher } from '../model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  basicVariables() {
    const myname = 'alex';

    // Numbers
    const age: number = 50;
    const weight = 83.12;
    // weight = 11;
    let dogWeight = 25.4;
    // dogWeight = "heavy";
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

    // Function returning never must have unreachable end point
    function error(message: string): never {
      throw new Error(message);
    }

    // Not much else we can assign to these variables!
    let u: undefined;
    const n: null = null;
  }

  useLetConst() {
    const index = 0;
    const array = ['a', 'b', 'c'];
    for (let index = 0; index < array.length; index++) {
      console.log('Inside for ...' + index);
      console.log('Inside for ...' + array[index]);
    }

    for (let item of array) {
      console.log(item);
    }

    console.log(index); // 0
    const pi = 3.14;
    // pi = 2;

    const person = { name: 'john', age: 22 };
    person.name = 'franz';

    // leveling up
    // const result = x + 'xyz';
    // var letresult = p + "xyz";

    const p = 'abc';
    const x = 'fgh';
  }

  stringFunctions() {
    const productID = 100;
    const category = 'music';

    // string concatenation
    const url = 'http://server/' + category + '/' + productID;
    console.log(url);

    // Template Literals using Backticks
    const tl = `http://server/${category}/${productID}`;
    console.log(tl);

    // startswith
    const str = 'To be, or not to be, that is the question.';
    console.log(str.startsWith('To be')); // true
    console.log(str.endsWith('question.')); // true

    // include -> C# string.contains
    function countString(ts) {
      const characters = ['a', 'b', 'c'];

      let ct = 0;
      for (const char of ts) {
        if (characters.includes(char)) {
          ct++;
        }
      }
      return ct;
    }

    console.log(`chars included in your string: ${countString('abheben')}`);
  }

  useVoidAny() {
    function handleClick(): void {
      const g = "I don't return anything.";
      console.log(g);
      // return g;
    }

    const delegate: void = handleClick();
    // execute it
    delegate;
  }

  useEnums() {
    enum Happyness {
      happy = 2,
      unhappy = 4,
      ok = 6,
    }

    const isHappy: Happyness = Happyness.happy;

    enum Sex {
      male = 'm',
      female = 'f',
      undefined = 'u',
    }

    enum VoucherStatus {
      draft,
      complete,
      pending,
    }

    let status: VoucherStatus;
    status = VoucherStatus.draft;
    status = VoucherStatus.complete;

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

    const newVoucher = new Voucher();

    const v: Voucher = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Date: new Date(),
    } as Voucher;

    handleVoucher(v, status);
  }

  useTypings() {
    // using moment
    const dt = new Date(1990, 3, 2);
    console.log('Using time format: ', moment(dt).format('LTS'));
  }
}
