import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { adminGuard } from '../shared/auth/adminGuard';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'demos',
                loadChildren: () =>
                    import('../demos/demo.routes').then((m) => m.DEMO_ROUTES),
            },
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [adminGuard],
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(MAIN_ROUTES)],
    exports: [RouterModule],
})
export class MainRoutingModule { }