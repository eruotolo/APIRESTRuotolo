import { Component } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';
import { UsersService } from '@modules/dashboard/pages/users/users-service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from '@modules/dashboard/pages/users/users-dialog/users-dialog.component';

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
        this.users = this.userService.getUsers();
    }

    // AGREGAR USUARIO
    abrirPopUpUsuario(): void {
        this.dialogUser
            .open(UsersDialogComponent)
            .afterClosed()
            .subscribe({
                next: (valor) => {
                    if (!!valor) {
                        this.users = [
                            ...this.users,
                            {
                                ...valor,
                                id: this.users.length + 1,
                            },
                        ];
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
                next: (v) => {
                    if (!!v) {
                        this.users = this.users.map((u) =>
                            u.id === user.id ? { ...u, ...v } : u,
                        );
                    }
                },
            });
    }

    // ELIMINAR USUARIO
    onDeleteUser(userId: number): void {
        this.users = this.users.filter((u) => u.id !== userId);
    }
}
