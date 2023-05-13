import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsListComponent } from './skills-list/skills-list.component';

const routes: Routes = [{ path: '', component: SkillsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule { }
