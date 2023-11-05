import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@modules/auth/auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                loadChildren: () =>
                    import('@modules/auth/pages/login/login.module').then(
                        (m) => m.LoginModule,
                    ),
            },
            {
                path: 'register',
                loadChildren: () =>
                    import('@modules/auth/pages/register/register.module').then(
                        (m) => m.RegisterModule,
                    ),
            },
            {
                path: '**',
                redirectTo: 'login',
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
