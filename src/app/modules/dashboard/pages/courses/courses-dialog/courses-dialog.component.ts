import { Component, Inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

import { CourseInterface } from '@core/models/course.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-courses-dialog',
    templateUrl: './courses-dialog.component.html',
    styleUrls: ['./courses-dialog.component.scss'],
})
export class CoursesDialogComponent {
    // REGISTRO FORMULARIO
    courseForm: FormGroup;

    // CONTROL DE VALIDACIÓN
    nameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);
    teacherControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);
    dayControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);

    // CONSTRUCTOR
    constructor(
        private formBuilder: FormBuilder,
        private matDialogRef: MatDialogRef<CoursesDialogComponent>,
        // RECIBO DATA
        @Inject(MAT_DIALOG_DATA) public course?: CourseInterface,
    ) {
        this.courseForm = this.formBuilder.group({
            name: this.nameControl,
            teacher: this.teacherControl,
            day: this.dayControl,
        });
        if (this.course) {
            this.courseForm.patchValue(this.course);
        }
    }

    onSubmit(): void {
        if (this.courseForm.invalid) {
            this.courseForm.markAllAsTouched();
        } else {
            this.matDialogRef.close(this.courseForm.value);
        }
    }
}
