import { Injectable } from '@angular/core';
import { StudentInterface } from '@core/models/student.interface';
import { environment } from '../../../../../../environments/environment.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '@core/models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class StudentsService {
    private baseUrl = environment.baseUrl + '/students';

    public students: StudentInterface[] = [];
    constructor(private httpClient: HttpClient) {}

    getStudents(): Observable<StudentInterface[]> {
        return this.httpClient.get<StudentInterface[]>(this.baseUrl);
    }

    addStudent(student: StudentInterface): Observable<StudentInterface> {
        return this.httpClient.post<StudentInterface>(this.baseUrl, student);
    }

    updateStudent(
        studentId: number,
        student: StudentInterface,
    ): Observable<StudentInterface> {
        const url = `${this.baseUrl}/${studentId}`;
        return this.httpClient.put<StudentInterface>(url, student);
    }

    deleteStudent(studentId: number): Observable<void> {
        const url = `${this.baseUrl}/${studentId}`;
        return this.httpClient.delete<void>(url);
    }
}
