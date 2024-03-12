import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../state/skills-entity.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
})
export class SkillsEditComponent {
  // nicht nested, aber mit @input - withComponentInputBinding() - holt sich die id von url runter
  // muss ebenso id heißen wie in routen konfiguration, edit/:id
  @Input({ required: true }) id = 0;
  router = inject(Router);
  sns = inject(SnackbarService);
  es = inject(SkillsEntityService);
  fb = inject(FormBuilder);
  skill: Skill = new Skill();

  skillForm = this.fb.nonNullable.group({
    name: ["", Validators.required],
    id: [0],
    completed: [false],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      const id = changes['id'].currentValue;
      if (id == 0) {
        this.skillForm.patchValue(new Skill());
      }
      else {
        this.es.getByKey(id).subscribe((skill) => {
          if (skill) {
            // nur wenn alle properties vorhanden, id, name, ocompleted - auch setValue möglich, Model = Form
            this.skillForm.setValue(skill);
          }
        });
      }
    }
  }

  saveSkill(skillForm: FormGroup) {
    const skill = skillForm.value as Skill;
    console.log("saveSkill", skill);
    if (skill.id == 0) {
      this.es.add(skill);
    }
    else {
      this.es.update(skill);
    }
    this.router.navigate(['skills']);
  }

  doCancel() {
    this.router.navigate(['skills']);
  }
}
