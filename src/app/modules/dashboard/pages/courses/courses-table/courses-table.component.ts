import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '@core/models/course.interface';

@Component({
    selector: 'app-courses-table',
    templateUrl: './courses-table.component.html',
})
export class CoursesTableComponent {
    @Input()
    dataSource: CourseInterface[] = [];

    @Output()
    deleteCourse = new EventEmitter<number>();

    @Output()
    editCourse = new EventEmitter<CourseInterface>();

    displayedColumns: string[] = [
        'id',
        'nameCourse',
        'teacherCourse',
        'dayCourse',
        'actions',
    ];
}
