import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { map, Observable } from 'rxjs';
import { UserInterface } from '@core/models/user.interface';

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

    logout(): void {
        this.authService.logout();
    }
}
