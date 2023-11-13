import { Component, Inject } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentInterface } from '@core/models/student.interface';

// FUNCIÓN CONTROL DE INGRESO EMAIL
function emailValidator(
    control: AbstractControl,
): { [key: string]: boolean } | null {
    const email = control.value;
    // Expresión regular para validar el formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        return { invalidEmail: true };
    }
    return null;
}

@Component({
    selector: 'app-students-dialog',
    templateUrl: './students-dialog.component.html',
    styleUrls: ['./students-dialog.component.scss'],
})
export class StudentsDialogComponent {
    // REGISTRO FORMULARIO
    studentForm: FormGroup;

    // CONTROL DE VALIDACIÓN
    nameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(2),
    ]);
    lastnameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(2),
    ]);
    ageControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
    ]);
    emailControl = new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        emailValidator,
    ]);

    // CONSTRUCTOR
    constructor(
        private formBuilder: FormBuilder,
        private matDialogRef: MatDialogRef<StudentsDialogComponent>,
        // RECIBO DATA
        @Inject(MAT_DIALOG_DATA) public student?: StudentInterface,
    ) {
        this.studentForm = this.formBuilder.group({
            name: this.nameControl,
            lastname: this.lastnameControl,
            email: this.emailControl,
            age: this.ageControl,
        });

        if (this.student) {
            this.studentForm.patchValue(this.student);
        }
    }

    onSubmit(): void {
        if (this.studentForm.invalid) {
            this.studentForm.markAllAsTouched();
        } else {
            this.matDialogRef.close(this.studentForm.value);
        }
    }
}
