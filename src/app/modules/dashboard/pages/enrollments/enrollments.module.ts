import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';

@NgModule({
    declarations: [EnrollmentsComponent],
    exports: [EnrollmentsComponent],
    imports: [CommonModule],
})
export class EnrollmentsModule {}
