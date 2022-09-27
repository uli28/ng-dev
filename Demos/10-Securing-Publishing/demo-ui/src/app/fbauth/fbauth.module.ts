import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CurrentUserComponent } from './components/current-user/current-user.component';

const comps = [LoginComponent, RegisterComponent, CurrentUserComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class FirebaseAuthModule {}
