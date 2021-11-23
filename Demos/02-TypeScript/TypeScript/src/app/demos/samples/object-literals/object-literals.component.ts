import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-object-literals',
  templateUrl: './object-literals.component.html',
  styleUrls: ['./object-literals.component.scss'],
})
export class ObjectLiteralsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  objectsBasics() {
    debugger;

    // Plain old JavaScript
    const myPerson = new Object();
    // myPerson.smile = function() {
    //   console.log;
    // };

    const otherPerson = {} as any;
    otherPerson.smile = function () {};

    const person: any = { Id: 1, Name: 'Giro' };
    person.walk = () => console.log(`I am ${person.Name} and I'm walking`);

    person.walk();
  }

  enhancedObjectLiterals() {
    debugger;

    function getCarES5(make, model, value) {
      return {
        make: make,
        model: model,
        value: value,
      };
    }

    // Property shorthand
    function getCar(make, model, value) {
      return {
        make,
        model,
        value,
      };
    }

    function getPersonClone(person: any) {
      return { ...person };
    }

    const person: any = { Id: 1, Name: 'Alexander' };
    const cloned = getPersonClone(person);
  }

  destructuring() {
    debugger;

    let fullPerson = { firstName: 'John', name: 'Doe', age: 17 };
    let { firstName, name } = fullPerson;
    console.log(firstName + ', ' + name);
  }

  objAssign() {
    debugger;

    const obj = { name: 'Soi' };
    const copy = Object.assign({}, obj, {
      birth: format(new Date(), 'MMM d yy'),
    });
    console.log(copy);
  }

  valref() {
    debugger;

    const person: any = { Id: 1, Name: 'Alexander' };
    let myNumber = 100;

    function passArgs(nbr: number, pers: any) {
      nbr += 1;
      pers.Name = 'Alex';
    }

    passArgs(myNumber, person);
    console.log('result for myNumber & person:', myNumber, person);

    myNumber = 500;
    person.Name = 'Alexander';
    passArgs(myNumber, Object.assign({}, person));
    console.log(
      'result for myNumber & person using Object.assign():',
      myNumber,
      person
    );

    passArgs(myNumber, { ...person });
    console.log('result for myNumber & person using spread:', myNumber, person);
  }

  copyspread() {
    debugger;

    // Spred operator on arrays
    const [x, y, ...remaining] = [1, 2, 3, 4];
    console.log(x, y); // 1, 2,
    console.log(remaining);

    // Spread operator on objects
    const simplePerson = { name: 'Schnuppi' };
    const dataPerson = {
      birth: format(new Date(), 'MMM d yy'),
      job: 'dev dude',
    };
    const shallowClone = { ...dataPerson };
    const combinedPerson = { ...simplePerson, ...dataPerson };
    console.log(shallowClone, combinedPerson);
  }
}
