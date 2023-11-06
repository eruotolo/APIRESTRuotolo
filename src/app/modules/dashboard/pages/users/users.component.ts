import { Component } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';
import { UsersService } from '@modules/dashboard/pages/users/users-service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from '@modules/dashboard/pages/users/users-dialog/users-dialog.component';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
    users: UserInterface[] = [];

    constructor(
        private dialogUser: MatDialog,
        private userService: UsersService,
    ) {
        /*this.users = this.userService.getUsers();*/
        this.userService.getUsers().subscribe((data: UserInterface[]) => {
            this.users = data;
        });
    }

    // AGREGAR USUARIO
    abrirPopUpUsuario(): void {
        this.dialogUser
            .open(UsersDialogComponent)
            .afterClosed()
            .subscribe({
                next: (valor) => {
                    if (!!valor) {
                        this.userService.addUser(valor).subscribe(
                            (newUser) => {
                                this.users = [...this.users, newUser];
                                Swal.fire(
                                    'Éxito',
                                    'Usuario agregado con éxito',
                                    'success',
                                );
                            },
                            (error) => {
                                Swal.fire(
                                    'Error',
                                    'Hubo un problema al agregar el usuario',
                                    'error',
                                );
                            },
                        );
                    }
                },
            });
    }

    //EDITAR ESTUDIANTE
    onEditUser(user: UserInterface) {
        this.dialogUser
            .open(UsersDialogComponent, {
                data: user,
            })
            .afterClosed()
            .subscribe({
                next: (updatedUser) => {
                    if (!!updatedUser) {
                        this.userService
                            .updateUser(user.id, updatedUser)
                            .subscribe((newUser) => {
                                Swal.fire(
                                    'Actualizado',
                                    'El usuario fue actualizado con éxito',
                                    'success',
                                );
                                this.users = this.users.map((u) =>
                                    u.id === newUser.id ? newUser : u,
                                );
                            });
                    }
                },
            });
    }

    onDeleteUser(userId: number): void {
        Swal.fire({
            title: 'Estas seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.deleteUser(userId).subscribe(() => {
                    Swal.fire(
                        'Eliminado',
                        'El usuario fue eliminado con éxito',
                        'success',
                    );
                    this.users = this.users.filter((u) => u.id !== userId);
                });
            }
        });
    }
}
