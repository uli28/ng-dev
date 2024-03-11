import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { delay, of } from 'rxjs';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    JsonPipe
  ],
})
export class BindingComponent implements OnInit {
  ps = inject(PersonService);
  persons: Person[] = [];
  // könnte auch person oder null initialisiert werdne, so spart man sich die null checks
  selectedPerson: Person = new Person();
  hide = false;
  latePerson: Person | null = null;
  isActive: boolean = false;

  // toSignal auch möglich
  pers = toSignal(this.ps.getPersons());

  ngOnInit() {
    this.ps.getPersons()
      .subscribe((data) => {
        if (data?.length > 0) {
          this.persons = data;
          this.selectedPerson = this.persons[0];
        }
      });

    //convert person to observable using of rxjs operator
    const p: Person = { id: 17, name: 'Heidi', age: 13, gender: 'female' };
    of(p)
      .pipe(
        delay(4000)
      )
      .subscribe((data) => {
        this.latePerson = data;
      });
  }

  toggleDisplay() {
    this.hide = !this.hide;
  }

  handleChange(p: Person) {
    console.log('value received from event binding', p);
  }
}
function toSignal(arg0: any) {
  throw new Error('Function not implemented.');
}

