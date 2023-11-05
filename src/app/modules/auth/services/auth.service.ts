import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { UserInterface } from '@core/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.local';
import { LoginInterface } from '@core/models/login.interface';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _authUser$ = new BehaviorSubject<UserInterface | null>(null);

    public authUser$ = this._authUser$.asObservable();
    constructor(
        private httpCliente: HttpClient,
        private router: Router,
    ) {}

    login(loginLoad: LoginInterface): void {
        this.httpCliente
            .get<UserInterface[]>(
                `${environment.baseUrl}/users?email=${loginLoad.email}&password=${loginLoad.password}`,
            )
            .subscribe({
                next: (response) => {
                    if (!response.length) {
                        alert('Usuario o Contraseña Invalido');
                    } else {
                        const authUser = response[0];
                        this._authUser$.next(authUser);
                        localStorage.setItem('token', authUser.token);
                        this.router.navigate(['/dashboard']);
                    }
                },
                error: (err) => {
                    alert('Error de conexión');
                },
            });
    }

    verifyToken(): Observable<boolean> {
        return this.httpCliente
            .get<UserInterface[]>(
                `${environment.baseUrl}/users?token=${localStorage.getItem(
                    'token',
                )}`,
            )
            .pipe(
                map((users) => {
                    if (!users.length) {
                        return false;
                    } else {
                        const authUser = users[0];
                        this._authUser$.next(authUser);
                        localStorage.setItem('token', authUser.token);
                        return true;
                    }
                }),
            );
    }

    logout(): void {
        this._authUser$.next(null);
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    }
}
