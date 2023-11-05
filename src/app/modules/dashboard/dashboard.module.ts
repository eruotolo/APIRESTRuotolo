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

@NgModule({
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        RouterModule,
        RouterOutlet,
        MatSidenavModule,
        MatButtonModule,
        LayoutsModule,
        MatIconModule,
        HomeModule,
    ],
})
export class DashboardModule {}
