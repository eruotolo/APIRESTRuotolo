import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardGuard } from '@core/guards/dashboard.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('@modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'dashboard',
        canActivate: [dashboardGuard],
        loadChildren: () =>
            import('@modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule,
            ),
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
