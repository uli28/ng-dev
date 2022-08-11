import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  introArrays() {
    // declaration using type followed by []
    const customers: string[] = ['Alex', 'Giro', 'Sonja', 'Soi', 'David'];
    // declaration using generic array type
    const nbrs: Array<number> = [3, 4, 5];

    console.log(customers.length + 'Persons in Array');
    customers[2] = 'Brunhilde';
    console.log('Person with index 1 is' + customers[1]);

    // for ... of
    const list: string[] = ['a', 'b', 'c'];

    for (const i in list) {
      console.log(i); // "0", "1", "2", -> for ... in loop returns index
    }

    for (const i of list) {
      console.log(i); // "a", "b", "c"  -> for ... of loop returns element
    }

    // array destructuring
    const arrNbr = [8, 4, 100, -5, 20];
    const [first, second, third] = arrNbr;
    console.log(third, second, first); // output: 100, 4, 8
  }

  arrayHelpers() {
    class Fruit {
      name: string;
      quantity: number;
      price: number;
      region: string;
    }

    const fruits: Fruit[] = [
      { name: 'apples', quantity: 2, price: 3, region: 'europe' },
      { name: 'bananas', quantity: 0, price: 5, region: 'caribean' },
      { name: 'cherries', quantity: 5, price: 8, region: 'europe' },
    ]; // -> Json Objects from REST call

    const fruitsother: {
      name: string;
      quantity: number;
      price: number;
      region: string;
    }[] = [
      { name: 'apples', quantity: 2, price: 3, region: 'europe' },
      { name: 'bananas', quantity: 0, price: 5, region: 'caribean' },
      { name: 'cherries', quantity: 5, price: 8, region: 'europe' },
    ]; // -> Json Objects from REST call

    var mystate: 'born' | 'died';

    // forEach
    fruits.forEach(function (fruit) {
      fruit.quantity++;
    });

    fruits.forEach((item: Fruit) => {
      item.quantity++;
    });

    fruits.forEach((item) => item.quantity++);

    // find -> returns first item
    const cherry = fruits.find(function (fruit) {
      return fruit.name === 'cherries';
    });

    const cherrySingleton = fruits.find((fruit) => fruit.name === 'cherries');

    console.log(cherry);

    // filter -> returns array
    const cheap = fruits.filter(function (item) {
      return item.price < 6;
    });
    console.log(cheap);

    // map -> shape arr
    const names = fruits.map(function (item) {
      return { name: item.name };
    });

    const lables = fruits.map(function (item) {
      return {
        label: `${item.name} costs ${item.price}`,
        stockInEuro: item.quantity * item.price,
      };
    });

    // reduce:  You want to find a cumulative or concatenated value based on elements across the array
    // array.reduce(callback[, initialValue]);
    class RocketLaunch {
      country: string;
      launches: number;
    }

    const rockets: RocketLaunch[] = [
      { country: 'Russia', launches: 32 },
      { country: 'US', launches: 23 },
      { country: 'China', launches: 16 },
      { country: 'Europe(ESA)', launches: 7 },
      { country: 'India', launches: 4 },
      { country: 'Japan', launches: 3 },
    ];

    let launches = rockets.reduce(function (agg, item) {
      return agg + item.launches;
    }, 0);

    launches = rockets.reduce(
      (agg: number, item: RocketLaunch) => agg + item.launches,
      0
    ); // same as above

    console.log('launches so far: ', launches);

    const food = [
      { id: 1, name: 'Butter Chicken', price: 9, calories: 1200 },
      { id: 2, name: 'Curry Wurst', price: 2.7, calories: 730 },
      { id: 3, name: 'Blini with Salmon', price: 8.3, calories: 600 },
    ];

    const nextId =
      food.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;

    console.log('next id would be ' + nextId);

    // splice -> manipulate arrays

    const dogs = ['whippet', 'galgo espanol', 'magyar whistler', 'magyar agar'];
    dogs.splice(2, 0, 'chart polski');
    console.log(dogs); // ["whippet", "galgo espanol", "chart polski", "magyar whistler", "magyar agar"]
    dogs.splice(3, 1);
    console.log(dogs); // ["whippet", "galgo espanol", "chart polski", "magyar agar"]

    // flatmap
    const orders = [
      {
        orderId: 1,
        items: [
          { name: 'abc', price: 2.22 },
          { name: 'ded', price: 4.22 },
        ],
      },
      {
        orderId: 2,
        items: [
          { name: 'asdfbc', price: 6.22 },
          { name: 'sdf', price: 8.22 },
        ],
      },
    ];

    const items = orders.flatMap((o) => o.items.map((i) => i.name));
  }

  chainingArrayHelpers() {
    interface Dog {
      name: string;
      age: number;
      breed: string;
    }

    const dogs: Dog[] = [
      {
        name: 'Cleo',
        age: 17,
        breed: 'Whippet',
      },
      {
        name: 'Giro',
        age: 9,
        breed: 'Galgo Espanol',
      },
      {
        name: 'Flora',
        age: 7,
        breed: 'Italian Sighthound',
      },
      {
        name: 'Soi',
        age: 5,
        breed: 'Whippet',
      },
    ];

    // Tasks:
    // Select only whippets
    // Translate into dog years
    // Sum result

    // typical ECMA Script 5 pattern
    function getAges(doggies) {
      let sum = 0;
      for (let i = 0; i < doggies.length; i++) {
        if (doggies[i].breed === 'Whippet') {
          const tempAge = doggies[i].age;
          sum += tempAge * 7;
        }
      }
      return sum;
    }
    console.log('Ages using for loop: ', getAges(dogs));

    // functional approach

    const whippets = dogs.filter((dog) => {
      return dog.breed === 'Whippet';
    });

    const adjustAge = dogs.map((dog) => dog.age * 7);

    const calSum = dogs.reduce((sum, animal) => {
      return sum + animal.age;
    }, 0);

    const sumFunctional = whippets
      .map((dog) => dog.age * 7)
      .reduce((sum, animalAge) => {
        return sum + animalAge;
      });

    console.log('Ages using functional approach: ', getAges(dogs));
  }

  restParams() {
    function playLotto(name: string, ...bets: number[]) {
      console.log(`${name} is playing the following lottery numbers: `);
      bets.forEach((nbr: number) => console.log(nbr));
    }

    playLotto('Hannes', 3, 12, 45, 48);
    playLotto('Hugo', 3, 12, 45, 48, 55, 22);
  }

  spreadOperator() {
    console.log(Math.max(3, 5, 1)); // 5

    const arr = [3, 5, 1];
    // console.log( Math.max(arr) ); // NaN
    console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

    const arr1 = [1, -2, 3, 90];
    const arr2 = [8, 3, -8, 1];

    console.log('Maximum is', Math.max(1, ...arr1, 2, ...arr2, 25)); // 90

    // Sample from Above

    function playLotto(name: string, ...bets: number[]) {
      console.log(`${name} is playing the following lottery numbers: `);
      bets.forEach((nbr: number) => console.log(nbr));
    }

    playLotto('Hannes', 3, 12, 45, 48);

    const numbers = [3, 12, 45, 48];

    // calling a function with ...rest param using ...spread
    playLotto('Hannes', ...numbers);
  }

  // -> C# Dictionary
  maps() {
    const myString = 'a string';
    const myMap = new Map<string, any>();
    const voucher = { Id: 33, Text: 'Diesel', Amount: 56 };
    const logFunction = function (param) {
      console.log(`logFuntion is logging: ${param}`);
    };

    // consts are sometimes easier to use
    const keyObject = 'keyObject';
    const keyFunct = 'keyFunct';

    // setting the values
    myMap.set('keyString', myString);
    myMap.set(keyObject, voucher);
    myMap.set(keyFunct, logFunction);

    console.log('Map size: ' + myMap.size); // 3

    // getting the values
    const strResult = myMap.get('keyString'); // "value associated with 'a string'"
    myMap.get(keyObject); // "value associated with 'a string'" because keyString === 'a string'
    myMap.get(keyFunct)('test'); // "value associated with keyObj"

    myMap.delete('keyString');
    myMap.clear();
  }

  // -> Indexed Array
  sets() {
    const mySet = new Set<any>();
    mySet.add(1);
    mySet.add('some text');
    const o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(Math.sqrt(25)); // true
    mySet.has('Some Text'.toLowerCase()); // true
    mySet.has(o); // true
    const size = mySet.size; // 4

    console.log(`acessing using: mySet[0] gives: `, mySet[0]);

    mySet.forEach((item) => console.log(`item in set: ${item}`));

    mySet.delete(5); // removes 5 from set

    // iterate set

    const log = (caller, sum) => console.log(`${caller} returned ${sum}`);

    const setNbrs: Set<number> = new Set<number>([2, 4, 88]);

    const sum = Array.from(setNbrs).reduce(function (a, b) {
      return a + b;
    }, 100);

    log('Sum with initail of 100', sum);

    const totalArrow = Array.from(setNbrs).reduce((a, b) => a + b);

    log('totalArrow', totalArrow);

    log(
      'totalArrow 2',
      Array.from(setNbrs).reduce((a, b) => a + b)
    );
  }

  usePipeline() {
    const double = (n) => n * 2;
    const increment = (n) => n + 1;

    // without pipeline operator
    double(increment(double(double(5)))); // 42
  }
}
