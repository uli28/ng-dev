import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { SkillsEntityService } from './skills-entity.service';
import { entityMetadata } from './skills.metadata';
import { SkillsRoutingModule } from './skills.routing.module';
import { MaterialModule } from '../material.module';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

@NgModule({
  declarations: [
    SkillRowComponent,
    SkillsListComponent,
    SkillsKpiComponent,
    SkillRowComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SkillsEntityService],
})
export class SkillsModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
  }
}
