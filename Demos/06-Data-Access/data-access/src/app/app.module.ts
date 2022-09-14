import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { SkillRowComponent } from './skills/skill-row/skill-row.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsListComponent,
    SkillsEditComponent,
    SkillRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
