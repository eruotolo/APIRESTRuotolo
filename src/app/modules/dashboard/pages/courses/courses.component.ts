import { Component } from '@angular/core';
import { CourseInterface } from '@core/models/course.interface';
import { CourseService } from '@modules/dashboard/pages/courses/course-service/course.service';

import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from '@modules/dashboard/pages/courses/courses-dialog/courses-dialog.component';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
    courses: CourseInterface[] = [];

    constructor(
        private dialogCourse: MatDialog,
        private coursesServices: CourseService,
    ) {
        this.coursesServices
            .getCourses()
            .subscribe((data: CourseInterface[]) => {
                this.courses = data;
            });
    }

    // AGREGAR ESTUDIANTE
    abrirPopUpCourse(): void {
        this.dialogCourse
            .open(CoursesDialogComponent)
            .afterClosed()
            .subscribe({
                next: (valor) => {
                    if (!!valor) {
                        this.coursesServices.addCourse(valor).subscribe(
                            (newCourse) => {
                                this.courses = [...this.courses, newCourse];
                                Swal.fire(
                                    'Éxito',
                                    'Curso agregado con éxito',
                                    'success',
                                );
                            },
                            (error) => {
                                Swal.fire(
                                    'Error',
                                    'Hubo un problema al agregar el usuario',
                                    'error',
                                );
                            },
                        );
                    }
                },
            });
    }

    //EDITAR ESTUDIANTE (falta agregar el edit)
    onEditCourse(course: CourseInterface): void {
        this.dialogCourse
            .open(CoursesDialogComponent, {
                data: course,
            })
            .afterClosed()
            .subscribe({
                next: (updateCourse) => {
                    if (!!updateCourse) {
                        this.coursesServices
                            .updateCourse(course.id, updateCourse)
                            .subscribe((newCourse) => {
                                Swal.fire(
                                    'Actualizado',
                                    'El curso fue actualizado con éxito',
                                    'success',
                                );
                                this.courses = this.courses.map((u) =>
                                    u.id === newCourse.id ? newCourse : u,
                                );
                            });
                    }
                },
            });
    }

    //ELIMINAR ESTUDIANTE
    onDeleteCourse(courseId: number): void {
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
                this.coursesServices.deleteCourse(courseId).subscribe(() => {
                    Swal.fire(
                        'Eliminado!',
                        'El curso fue eliminado.',
                        'success',
                    );
                    this.courses = this.courses.filter(
                        (s) => s.id !== courseId,
                    );
                });
            }
        });
    }
}
