import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from '@modules/dashboard/pages/enrollments/enrollments-routing.module';

@NgModule({
    declarations: [EnrollmentsComponent],
    exports: [EnrollmentsComponent],
    imports: [CommonModule, EnrollmentsRoutingModule],
})
export class EnrollmentsModule {}
