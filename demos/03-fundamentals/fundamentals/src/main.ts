import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// hier wird gebootet, app component ist immer rout
bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));