import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

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

    constructor(private authService: AuthService) {}

    logout(): void {
        this.authService.logout();
    }
}
