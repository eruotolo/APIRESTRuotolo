import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { HomeComponent } from '@modules/dashboard/pages/home/home.component';
import { UsersComponent } from '@modules/dashboard/pages/users/users.component';
import { CoursesComponent } from '@modules/dashboard/pages/courses/courses.component';
import { StudentsComponent } from '@modules/dashboard/pages/students/students.component';
import { EnrollmentsComponent } from '@modules/dashboard/pages/enrollments/enrollments.component';
import { UserProfileComponent } from '@modules/dashboard/pages/users/user-profile/user-profile.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('@modules/dashboard/pages/users/users.module').then(
                        (m) => m.UsersModule,
                    ),
            },
            {
                path: 'courses',
                loadChildren: () =>
                    import(
                        '@modules/dashboard/pages/courses/courses.module'
                    ).then((m) => m.CoursesModule),
            },
            {
                path: 'students',
                loadChildren: () =>
                    import(
                        '@modules/dashboard/pages/students/students.module'
                    ).then((m) => m.StudentsModule),
            },
            {
                path: 'enrollments',
                loadChildren: () =>
                    import(
                        '@modules/dashboard/pages/enrollments/enrollments.module'
                    ).then((m) => m.EnrollmentsModule),
            },
            {
                path: '**',
                redirectTo: 'home',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
