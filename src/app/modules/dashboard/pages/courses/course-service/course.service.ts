import { Injectable } from '@angular/core';
import { CourseInterface } from '@core/models/course.interface';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    constructor() {}

    getCourses(): CourseInterface[] {
        console.log('retornando data mock');
        return [
            {
                id: 1,
                nameCourse: 'Php',
                teacherCourse: 'Orlando Gadea',
                dayCourse: 'Lunes - 12:30 a 15:00',
            },
            {
                id: 2,
                nameCourse: 'Programación 1',
                teacherCourse: 'Ignacio',
                dayCourse: 'Martes - 12:30 a 15:00',
            },
            {
                id: 3,
                nameCourse: 'Base de Datos',
                teacherCourse: 'Enzo',
                dayCourse: 'Miércoles - 12:30 a 15:00',
            },
            {
                id: 4,
                nameCourse: 'Lógica',
                teacherCourse: 'Mariano',
                dayCourse: 'Jueves - 12:30 a 15:00',
            },
            {
                id: 5,
                nameCourse: 'CC++',
                teacherCourse: 'Ignacio',
                dayCourse: 'Viernes - 12:30 a 15:00',
            },
        ];
    }
}
