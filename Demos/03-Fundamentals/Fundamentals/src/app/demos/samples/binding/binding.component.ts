import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  constructor(private ps: PersonService) {}

  hide = false;
  persons: Person[];
  selectedPerson: Person = { id: 0, name: '', age: 0, gender: '' };
  latePerson: Person;
  isActive: boolean = false;

  ngOnInit() {
    this.ps.getPersons().subscribe((data) => {
      if (data) {
        this.persons = data;
        this.selectedPerson = this.persons[0];
      }
    });

    let p: Person = { id: 17, name: 'Heidi', age: 13, gender: 'female' };
    //convert person to observable using of operator
    of(p)
      .pipe(delay(4000))
      .subscribe((data) => {
        this.latePerson = data;
      });
  }

  toggleDisplay() {
    this.hide = !this.hide;
  }

  handleChange(p: Person) {
    console.log('value received from eventbinding', p);
  }
}
