import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ComponentClassComponent } from './samples/component-class/component-class.component';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { ComponentInjectionComponent } from './samples/component-injection/component-injection.component';
import { InjectionComponent } from './samples/component-injection/injection/injection.component';
import { ComponentTestingmoduleComponent } from './samples/component-testingmodule/component-testingmodule.component';
import { TestingModuleInlineComponent } from './samples/component-testingmodule/testing-module-inline/testing-module-inline.component';
import { TestingModuleComponent } from './samples/component-testingmodule/testing-module/testing-module.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';
import { FoodListComponent } from './samples/integration-tests/food-list/food-list.component';
import { FoodRowComponent } from './samples/integration-tests/food-row/food-row.component';
import { IntegrationTestComponent } from './samples/integration-tests/integration-test.component';
import { Introe2eComponent } from './samples/introe2e/introe2e.component';
import { MaterialComponent } from './samples/material/material.component';
import { RatingPipe } from './samples/pipe/rating.pipe';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { FoodHttpComponent } from './samples/service-http-injection/food-http/food-http.component';
import { ServiceHttpInjectionComponent } from './samples/service-http-injection/service-http-injection.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';
import { UnitTestingComponent } from './samples/simple-tests/unit-testing.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { UseMockComponent } from './samples/mocking/use-mock/use-mock.component';
import { LoadingService } from '../shared/loading/loading.service';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { UseSpyComponent } from './samples/mocking/use-spy/use-spy.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'unittesting', component: UnitTestingComponent },
      { path: 'testpipe', component: TestPipeComponent },
      { path: 'simpleservice', component: SimpleServiceComponent },
      { path: 'httptest', component: ServiceHttpInjectionComponent },
      { path: 'comp-inject', component: ComponentInjectionComponent },
      { path: 'integrationtests', component: IntegrationTestComponent },
      { path: 'mock', component: UseMockComponent },
      { path: 'component-events', component: ComponentEventsComponent },
      { path: 'component-write', component: ComponentWriteComponent },
      { path: 'harness', component: MaterialComponent },
      { path: 'e2e', component: Introe2eComponent },
      { path: 'spy', component: UseSpyComponent },
      { path: 'comp-class', component: ComponentClassComponent },
      {
        path: 'comp-testingmodule',
        component: ComponentTestingmoduleComponent,
      },
      {
        path: 'stateful',
        component: StatefulComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    UnitTestingComponent,
    TestPipeComponent,
    IntegrationTestComponent,
    SimpleServiceComponent,
    TestPipeComponent,
    RatingPipe,
    FoodRowComponent,
    FoodListComponent,
    ComponentEventsComponent,
    ComponentWriteComponent,
    MaterialComponent,
    Introe2eComponent,
    FoodHttpComponent,
    ServiceHttpInjectionComponent,
    ComponentClassComponent,
    ComponentInjectionComponent,
    ComponentTestingmoduleComponent,
    TestingModuleComponent,
    TestingModuleInlineComponent,
    InjectionComponent,
    StatefulComponent,
    UseSpyComponent,
    UseMockComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule {}
