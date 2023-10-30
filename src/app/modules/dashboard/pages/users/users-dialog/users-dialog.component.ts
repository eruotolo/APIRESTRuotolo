import { Component, Inject } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserInterface } from '@core/models/user.interface';

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
    selector: 'app-users-dialog',
    templateUrl: './users-dialog.component.html',
    styleUrls: ['./users-dialog.component.scss'],
})
export class UsersDialogComponent {
    // REGISTRO FORMULARIO
    userForm: FormGroup;

    // CONTROL DE VALIDACIÓN
    nameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(2),
    ]);
    lastnameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(2),
    ]);
    emailControl = new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        emailValidator,
    ]);
    roleControl = new FormControl([
        Validators.required,
        Validators.minLength(2),
    ]);

    // CONSTRUCTOR
    constructor(
        private formBuilder: FormBuilder,
        private matDialogRef: MatDialogRef<UsersDialogComponent>,
        // RECIBO LA DATA DESDE EL FORM
        @Inject(MAT_DIALOG_DATA) public user?: UserInterface,
    ) {
        this.userForm = this.formBuilder.group({
            name: this.nameControl,
            lastname: this.lastnameControl,
            email: this.emailControl,
            rol: this.roleControl,
        });

        if (this.user) {
            this.userForm.patchValue(this.user);
        }
    }

    onSubmit(): void {
        if (this.userForm.invalid) {
            this.userForm.markAsTouched();
        } else {
            this.matDialogRef.close(this.userForm.value);
        }
    }
}
