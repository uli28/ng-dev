import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AdvHttpClientComponent } from './samples/adv-http-client/adv-http-client.component';
import { JsonServerComponent } from './samples/json-server/json-server.component';
import { ObservableCrudComponent } from './samples/observable-crud/observable-crud.component';
import { AuthInterceptor } from '../auth-interceptor';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'observables-crud', component: ObservableCrudComponent },
      { path: 'adv-httpclient', component: AdvHttpClientComponent },
      { path: 'json-server', component: JsonServerComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    ObservableCrudComponent,
    JsonServerComponent,
    AdvHttpClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule {}
