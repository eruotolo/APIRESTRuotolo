import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { HomeComponent } from '@modules/dashboard/pages/home/home.component';
import { UsersComponent } from '@modules/dashboard/pages/users/users.component';
import { CoursesComponent } from '@modules/dashboard/pages/courses/courses.component';
import { StudentsComponent } from '@modules/dashboard/pages/students/students.component';
import { EnrollmentsComponent } from '@modules/dashboard/pages/enrollments/enrollments.component';

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
                component: UsersComponent,
            },
            {
                path: 'courses',
                component: CoursesComponent,
            },
            {
                path: 'students',
                component: StudentsComponent,
            },
            {
                path: 'enrollments',
                component: EnrollmentsComponent,
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
