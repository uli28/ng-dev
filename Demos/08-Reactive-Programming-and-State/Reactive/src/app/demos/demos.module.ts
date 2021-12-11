import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { MarkdownEditorComponent } from './comments/markdown-editor/markdown-editor.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { AsyncComponent } from './samples/async/async.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { EvtBusComponent } from './samples/evt-bus/evt-bus.component';
import { FlexLayoutApiComponent } from './samples/flex-layout-api/flex-layout-api.component';
import { DebouncedSearchComponent } from './samples/operators/debounced-search/debounced-search.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { SumComponent } from './samples/stateful/sum/sum.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { VouchersService } from './samples/voucher.service';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'subjects', component: SubjectsComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'flexlayoutapi', component: FlexLayoutApiComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'streams', component: AsyncComponent },
      { path: 'stateful', component: StatefulComponent },
      { path: 'evtbus', component: EvtBusComponent },
      { path: 'search', component: DebouncedSearchComponent },
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
    EvtBusComponent,
    MarkdownEditorComponent,
    AsyncComponent,
    SumComponent,
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
  providers: [DemoService, VouchersService],
})
export class DemosModule {}
