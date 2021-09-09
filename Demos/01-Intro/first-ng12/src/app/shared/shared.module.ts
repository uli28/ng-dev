import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../../../../first-ng12/src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
const comps = [NavbarComponent, SidebarComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
})
export class SharedModule {}
