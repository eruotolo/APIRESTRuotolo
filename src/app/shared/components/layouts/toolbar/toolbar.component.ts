import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { map, Observable } from 'rxjs';
import { UserInterface } from '@core/models/user.interface';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    @Output()
    toggleSidebar = new EventEmitter();

    logoPrincipal = 'assets/images/logo.png';
    public navStyle = {
        height: '10vh',
    };

    public authUser$: Observable<UserInterface | null>;
    constructor(private authService: AuthService) {
        this.authUser$ = this.authService.authUser$;
    }

    get fullName$(): Observable<string> {
        return this.authUser$.pipe(
            map((user) => `${user?.name} ${user?.lastname}`),
        );
    }

    /*logout(): void {
        this.authService.logout();
    }*/

    logout(): void {
        Swal.fire({
            title: '¿Estás seguro de que <br>quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3f51b5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar Sesión',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Sesión Cerrada!',
                    text: 'Su usuario se a desconectado',
                    icon: 'success',
                });
                this.authService.logout();
            }
        });
    }
}
