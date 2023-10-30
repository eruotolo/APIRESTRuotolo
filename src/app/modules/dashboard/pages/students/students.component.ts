import { Component } from '@angular/core';
import { StudentInterface } from '@core/models/student.interface';
import { StudentsService } from '@modules/dashboard/pages/students/students-service/students.service';

import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from '@modules/dashboard/pages/students/students-dialog/students-dialog.component';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
    students: StudentInterface[] = [];

    constructor(
        private dialogStudent: MatDialog,
        private studentsService: StudentsService,
    ) {
        this.students = this.studentsService.getStudents();
    }

    // AGREGAR ESTUDIANTE
    abrirPopUpStudent(): void {
        const currentDate = new Date();
        this.dialogStudent
            .open(StudentsDialogComponent)
            .afterClosed()
            .subscribe({
                next: (valor) => {
                    if (!!valor) {
                        this.students = [
                            ...this.students,
                            {
                                ...valor,
                                id: this.students.length + 1,
                                regDate: currentDate,
                            },
                        ];
                    }
                },
            });
    }

    //EDITAR ESTUDIANTE
    onEditStudent(student: StudentInterface): void {
        this.dialogStudent
            .open(StudentsDialogComponent, {
                data: student,
            })
            .afterClosed()
            .subscribe({
                next: (v) => {
                    if (!!v) {
                        this.students = this.students.map((s) =>
                            s.id === student.id ? { ...s, ...v } : s,
                        );
                    }
                },
            });
    }

    //ELIMINAR ESTUDIANTE
    onDeleteStudent(studentId: number): void {
        this.students = this.students.filter((s) => s.id !== studentId);
    }
}
