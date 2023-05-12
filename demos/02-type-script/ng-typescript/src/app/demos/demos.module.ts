import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ClassesComponent } from './samples/classes/classes.component';
import { EslintComponent } from './samples/eslint/eslint.component';
import { FunctionsComponent } from './samples/functions/functions.component';
import { GenericsComponent } from './samples/generics/generics.component';
import { InterfacesComponent } from './samples/interfaces/interfaces.component';
import { ModulesComponent } from './samples/modules/modules.component';
import { ObjectsComponent } from './samples/objects/objects.component';
import { ServicesComponent } from './samples/services/services.component';
import { TypesComponent } from './samples/types/types.component';
import { UtilsComponent } from './samples/utils/utils.component';
import { MdRendererModule } from '../shared/markdown-renderer/md-renderer.module';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'types', component: TypesComponent },
      { path: 'utils', component: UtilsComponent },
      { path: 'objects', component: ObjectsComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'functions', component: FunctionsComponent },
      { path: 'interfaces', component: InterfacesComponent },
      { path: 'gernerics', component: GenericsComponent },
      { path: 'modules', component: ModulesComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'eslint', component: EslintComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    TypesComponent,
    ClassesComponent,
    FunctionsComponent,
    GenericsComponent,
    InterfacesComponent,
    ModulesComponent,
    ObjectsComponent,
    ServicesComponent,
    EslintComponent,
    UtilsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    MdRendererModule
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule { }
