import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentInterface } from '@core/models/student.interface';

@Component({
    selector: 'app-students-table',
    templateUrl: './students-table.component.html',
})
export class StudentsTableComponent {
    @Input()
    dataSource: StudentInterface[] = [];

    @Output()
    deleteUser = new EventEmitter<number>();

    @Output()
    editUser = new EventEmitter<StudentInterface>();

    displayedColumns: string[] = ['id', 'fullname', 'age', 'email', 'actions'];
}
