import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { emptyPerson, wealthOpts } from '../empty-person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-ng-model-grp',
  templateUrl: './ng-model-grp.component.html',
  styleUrls: ['./ng-model-grp.component.scss'],
})
export class NgModelGrpComponent implements OnInit {
  person: Person = emptyPerson;
  wealthOpts = wealthOpts;

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
