import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatestWith, map, Observable, startWith } from 'rxjs';
import { Person } from './person.model';
import { PersonService } from './person.service';


@Component({
  selector: 'app-reified-reactive',
  templateUrl: './reified-reactive.component.html',
  styleUrls: ['./reified-reactive.component.scss'],
})
export class ReifiedReactiveComponent implements OnInit {
  filter$ = new FormControl('', { nonNullable: true });
  persons$: Observable<Person[]> | null = null;

  constructor(private service: PersonService) { }

  ngOnInit(): void {
    // no unsubscribe needed because use of async pipe in template
    this.persons$ = this.service.getPersons().pipe(
      // initialization: startWith('') will emit an empty string to the stream
      combineLatestWith(this.filter$.valueChanges.pipe(startWith(''))),
      map(([persons, filter]) => {
        return filter == ''
          ? persons
          : persons.filter((skill) => skill.name.includes(filter));
      })
    );
  }
}
