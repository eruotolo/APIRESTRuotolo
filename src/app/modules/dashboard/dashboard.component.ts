import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    showSidebar = false;
    showHome = true;
    public btnHamburguesa = {
        color: '#ffffff',
    };
}
