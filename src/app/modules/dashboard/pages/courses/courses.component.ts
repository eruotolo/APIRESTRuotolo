import { Component } from '@angular/core';
import { CourseInterface } from '@core/models/course.interface';
import { CourseService } from '@modules/dashboard/pages/courses/course-service/course.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from '@modules/dashboard/pages/students/students-dialog/students-dialog.component';
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
        const currentDate = new Date();
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
                                regDate: currentDate,
                            },
                        ];
                    }
                },
            });
    }

    //ELIMINAR ESTUDIANTE
    onDeleteCourse(courseId: number): void {
        this.courses = this.courses.filter((s) => s.id !== courseId);
    }
}
