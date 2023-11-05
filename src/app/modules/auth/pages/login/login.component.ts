import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';

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
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    logoPrincipal = 'assets/images/logo.png';

    emailControl = new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        emailValidator,
    ]);
    passwordControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);

    loginForm = new FormGroup({
        email: this.emailControl,
        password: this.passwordControl,
    });

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}
    login(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
        } else {
            this.authService.login(this.loginForm.getRawValue());
        }
    }
}
