import { Component, OnInit, inject } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent]
})
export class DependencyInjectionComponent implements OnInit {
  ps = inject(PersonService);
  persons: Person[] = [];

  ngOnInit(): void {
    this.ps.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }
}
