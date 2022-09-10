import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { MarkdownEditorComponent } from './comments/markdown-editor/markdown-editor.component';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { EventBusComponent } from './samples/event-bus/event-bus.component';
import { FlexLayoutApiComponent } from './samples/flex-layout-api/flex-layout-api.component';
import { LoadingHostComponent } from './samples/loading-host/loading-host.component';
import { DebouncedSearchComponent } from './samples/operators/debounced-search/debounced-search.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { StatefulVouchersComponent } from './samples/vouchers/stateful-vouchers/stateful-vouchers.component';
import { FormControlsComponent } from './samples/form-controls/form-controls.component';
import { SignPadComponent } from './samples/unsubscribing/sign-pad/sign-pad.component';
import { ImperativeComponent } from './samples/imperative/imperative.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { ReifiedReactiveComponent } from './samples/reified-reactive/reified-reactive.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'subjects', component: SubjectsComponent },
      { path: 'imperative', component: ImperativeComponent },
      { path: 'reactive', component: ReifiedReactiveComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'formcontrols', component: FormControlsComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'flexlayoutapi', component: FlexLayoutApiComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'streams', component: AsyncPipeComponent },
      { path: 'stateful', component: StatefulComponent },
      { path: 'eventbus', component: EventBusComponent },
      { path: 'search', component: DebouncedSearchComponent },
      { path: 'loading', component: LoadingHostComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CreatingObservableComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    DebouncedSearchComponent,
    SubjectsComponent,
    StatefulComponent,
    EventBusComponent,
    MarkdownEditorComponent,
    AsyncPipeComponent,
    StatefulVouchersComponent,
    LoadingHostComponent,
    FormControlsComponent,
    SignPadComponent,
    ImperativeComponent,
    ReifiedReactiveComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule {}
