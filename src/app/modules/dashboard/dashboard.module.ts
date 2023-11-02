import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LayoutsModule } from '@shared/components/layouts/layouts.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { HomeModule } from '@modules/dashboard/pages/home/home.module';
import { StudentsModule } from '@modules/dashboard/pages/students/students.module';
import { UsersModule } from '@modules/dashboard/pages/users/users.module';
import { CoursesModule } from '@modules/dashboard/pages/courses/courses.module';
import { EnrollmentsModule } from '@modules/dashboard/pages/enrollments/enrollments.module';
@NgModule({
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        MatSidenavModule,
        MatButtonModule,
        LayoutsModule,
        MatIconModule,
        DashboardRoutingModule,
        RouterModule,
        HomeModule,
        UsersModule,
        CoursesModule,
        StudentsModule,
        EnrollmentsModule,
    ],
})
export class DashboardModule {}
