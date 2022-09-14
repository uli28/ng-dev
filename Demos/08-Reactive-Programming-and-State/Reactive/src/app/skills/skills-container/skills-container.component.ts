import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of, combineLatestWith } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent {
  fcToggle = new FormControl(true);
  skills: Observable<Skill[]> | null = null;
  view: Observable<Skill[]> | null = null;

  constructor(private skillsService: SkillsEntityService) {
    this.skills = this.skillsService.entities$;
    this.view = this.skills.pipe(
      combineLatestWith(this.fcToggle.valueChanges.pipe(startWith(true))),
      map(([skills, showAll]) => {
        return showAll ? skills : skills.filter((s) => s.completed);
      })
    );
  }

  ngOnInit(): void {
    this.skillsService.getAll();
  }

  addItem(): void {
    const newItem: Skill = { id: 0, name: 'Container', completed: false };
    this.skillsService.add(newItem);
  }

  deleteItem(item: Skill): void {
    this.skillsService.delete(item);
  }

  toggleItemComplete(item: Skill): void {}
}
