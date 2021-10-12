import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { MarkdownModule } from 'ngx-markdown';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { ClassesComponent } from './samples/classes/classes.component';
import { FunctionsComponent } from './samples/functions/functions.component';
import { GenericsComponent } from './samples/generics/generics.component';
import { InterfacesComponent } from './samples/interfaces/interfaces.component';
import { ModulesComponent } from './samples/modules/modules.component';
import { ObjectLiteralsComponent } from './samples/object-literals/object-literals.component';
import { ServicesComponent } from './samples/services/services.component';
import { TypesComponent } from './samples/types/types.component';
import { EslintComponent } from './samples/eslint/eslint.component';
import { SharedModule } from '../shared/shared.module';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'types', component: TypesComponent },
      { path: 'objects', component: ObjectLiteralsComponent },
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
    ObjectLiteralsComponent,
    ServicesComponent,
    EslintComponent,
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
  ],
  providers: [DemoService],
})
export class DemosModule {}
