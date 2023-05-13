import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject, takeUntil, Subscription } from 'rxjs';
import { Skill } from 'src/app/skills/skill.model';
import { SkillsService } from '../../../skills/skills.service';

@Component({
  selector: 'app-imperative',
  templateUrl: './imperative.component.html',
  styleUrls: ['./imperative.component.scss'],
})
export class ImperativeComponent implements OnInit {
  @Input() title = 'ImperativeProgramming';
  @Input() showMD = true;
  service = inject(SkillsService);
  filter$ = new FormControl('', { nonNullable: true });
  filterSubscription: Subscription | null = null;

  //local vars for values taken out of the stream
  skills: Skill[] = [];
  view: Skill[] = [];


  ngOnInit(): void {
    this.filterSubscription = this.service
      .getSkills()
      //takeUntil will unsubscribe from the stream when the destroy$ Subject emits a value
      .subscribe((skills) => {
        this.skills = skills;
        this.view = skills;
      });

    this.filter$.valueChanges
      .subscribe((val) => {
        this.view =
          val == ''
            ? this.skills
            : this.skills.filter((skill) => skill.name.toLowerCase().includes(val.toLocaleLowerCase()));
      });
  }

  ngOnDestroy() {
    this.filterSubscription?.unsubscribe();
  }
}
