import { Component } from '@angular/core';
import { StudentInterface } from '@core/models/student.interface';
import { StudentsService } from '@modules/dashboard/pages/students/students-service/students.service';

import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from '@modules/dashboard/pages/students/students-dialog/students-dialog.component';
import Swal from 'sweetalert2';
import { UserInterface } from '@core/models/user.interface';

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
        /*this.students = this.studentsService.getStudents();*/
        this.studentsService
            .getStudents()
            .subscribe((data: StudentInterface[]) => {
                this.students = data;
            });
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
                Swal.fire(
                    'Eliminado!',
                    'El estudiante fue eliminado.',
                    'success',
                );
                this.students = this.students.filter((s) => s.id !== studentId);
            }
        });
    }
}
