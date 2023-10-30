import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
    @Input()
    dataSource: UserInterface[] = [];

    @Output()
    deleteUser = new EventEmitter<number>();

    @Output()
    editUser = new EventEmitter<UserInterface>();

    displayedColumns: string[] = ['id', 'rol', 'fullname', 'email', 'actions'];
}
