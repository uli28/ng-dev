import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

@NgModule({
  declarations: [SkillsComponent, SkillsListComponent],
  imports: [CommonModule, SkillsRoutingModule],
})
export class SkillsModule {}
