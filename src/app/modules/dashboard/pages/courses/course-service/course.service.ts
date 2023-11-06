import { Injectable } from '@angular/core';

import { CourseInterface } from '@core/models/course.interface';
import { environment } from '../../../../../../environments/environment.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    private baseUrl = environment.baseUrl + '/courses';
    public courses: CourseInterface[] = [];
    constructor(private httpClient: HttpClient) {}

    getCourses(): Observable<CourseInterface[]> {
        return this.httpClient.get<CourseInterface[]>(this.baseUrl);
    }

    addCourse(course: CourseInterface): Observable<CourseInterface> {
        return this.httpClient.post<CourseInterface>(this.baseUrl, course);
    }

    updateCourse(
        courseId: number,
        course: CourseInterface,
    ): Observable<CourseInterface> {
        const url = `${this.baseUrl}/${courseId}`;
        return this.httpClient.put<CourseInterface>(url, course);
    }

    deleteCourse(courseId: number): Observable<void> {
        const url = `${this.baseUrl}/${courseId}`;
        return this.httpClient.delete<void>(url);
    }
}
