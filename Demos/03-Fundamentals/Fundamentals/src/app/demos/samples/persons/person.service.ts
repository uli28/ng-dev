import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Person } from './person.model';

@Injectable()
export class PersonService {
  constructor() {}

  data: Person[] = [
    {
      id: 1,
      name: 'Cleo',
      age: 15,
      gender: 'famale',
      married: true,
      imgUrl: '/assets/images/cleo.png',
    },
    {
      id: 2,
      name: 'Soi',
      age: 9,
      gender: 'female',
      married: false,
      imgUrl: '/assets/images/soi.png',
    },
    {
      id: 3,
      name: 'Giro',
      age: 11,
      gender: 'male',
      married: false,
      imgUrl: '/assets/images/giro.png',
    },
  ];

  getPersons(): Observable<Person[]> {
    return of(this.data).pipe(delay(1000));
  }
}
