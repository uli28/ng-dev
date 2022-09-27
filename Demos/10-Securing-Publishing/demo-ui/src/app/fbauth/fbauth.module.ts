import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const forms = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: forms,
  exports: forms,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class FBAuthModule {}
