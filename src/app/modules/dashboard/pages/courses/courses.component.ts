import { Component } from '@angular/core';
import { CourseInterface } from '@core/models/course.interface';
import { CourseService } from '@modules/dashboard/pages/courses/course-service/course.service';

import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from '@modules/dashboard/pages/courses/courses-dialog/courses-dialog.component';

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
        this.courses = this.coursesServices.getCourses();
    }

    // AGREGAR ESTUDIANTE
    abrirPopUpCourse(): void {
        this.dialogCourse
            .open(CoursesDialogComponent)
            .afterClosed()
            .subscribe({
                next: (valor) => {
                    if (!!valor) {
                        this.courses = [
                            ...this.courses,
                            {
                                ...valor,
                                id: this.courses.length + 1,
                            },
                        ];
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
                next: (v) => {
                    if (!!v) {
                        this.courses = this.courses.map((c) =>
                            c.id === course.id ? { ...c, ...v } : c,
                        );
                    }
                },
            });
    }

    //ELIMINAR ESTUDIANTE
    onDeleteCourse(courseId: number): void {
        this.courses = this.courses.filter((s) => s.id !== courseId);
    }
}
