import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ngx-ckeditor';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { IsAuthRouteGuard } from './IsAuthRouteGuard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { SkillRowComponent } from './skills/skill-row/skill-row.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { SkillResolverService } from './skills/skill-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdminComponent,
    SkillsListComponent,
    SkillsEditComponent,
    SkillRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    AdminModule,
  ],
  providers: [IsAuthRouteGuard, SkillResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
