import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  PageNotFoundComponent,
  MarkdownRendererComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule {}
