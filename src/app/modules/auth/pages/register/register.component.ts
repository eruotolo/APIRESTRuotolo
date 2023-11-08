import { Component, Inject } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '@modules/auth/services/register.service';
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
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    logoPrincipal = 'assets/images/logo.png';

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
    passControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);

    // CONSTRUCTOR

    constructor(
        private formBuilder: FormBuilder,
        private registerService: RegisterService,
        private router: Router,
    ) {
        this.userForm = this.formBuilder.group({
            name: this.nameControl,
            lastname: this.lastnameControl,
            email: this.emailControl,
            password: this.passControl,
        });
    }

    onSubmit(): void {
        if (this.userForm.invalid) {
            this.userForm.markAsTouched();
            return;
        }

        // Obtén la lista de usuarios existentes desde el servicio
        this.registerService.getUsers().subscribe((existingUsers) => {
            // Encuentra el valor máximo actual de id en la lista de usuarios
            const maxId = existingUsers.reduce(
                (max, user) => (user.id > max ? user.id : max),
                0,
            );

            // Incrementa el valor de id en uno para evitar duplicados
            const newUserId = maxId + 1;

            // Generar un token aleatorio (puedes personalizar la generación de token según tus necesidades)
            const randomToken = Math.random().toString(36).substring(2);

            // Crear un objeto UserInterface con los valores del formulario
            const newUser: UserInterface = {
                id: newUserId,
                name: this.nameControl.value as string,
                lastname: this.lastnameControl.value as string,
                email: this.emailControl.value as string,
                rol: 'User',
                password: this.passControl.value as string,
                token: randomToken,
            };

            // Agregar el nuevo usuario utilizando el servicio
            this.registerService.addUser(newUser).subscribe(
                (addedUser) => {
                    console.log('User added:', addedUser);
                    this.userForm.reset();
                    this.router.navigate(['/login']);
                },
                (error) => {
                    console.error(
                        'Hubo un problema al agregar el usuario',
                        error,
                    );
                },
            );
        });
    }
}
