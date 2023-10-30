import { Injectable } from '@angular/core';
import { StudentInterface } from '@core/models/student.interface';

@Injectable({
    providedIn: 'root',
})
export class StudentsService {
    constructor() {}
    getStudents(): StudentInterface[] {
        console.log('retornando data mock');
        return [
            {
                id: 1,
                name: 'John',
                lastname: 'Doe',
                age: 20,
                email: 'example@gmail.com',
                course: 'Math',
                regDate: new Date(),
            },
            {
                id: 2,
                name: 'Jane',
                lastname: 'Smith',
                age: 22,
                email: 'example@gmail.com',
                course: 'English',
                regDate: new Date(),
            },
            {
                id: 3,
                name: 'Michael',
                lastname: 'Johnson',
                age: 19,
                email: 'example@gmail.com',
                course: 'Science',
                regDate: new Date(),
            },
            {
                id: 4,
                name: 'Emily',
                lastname: 'Williams',
                age: 21,
                email: 'example@gmail.com',
                course: 'History',
                regDate: new Date(),
            },
            {
                id: 5,
                name: 'Daniel',
                lastname: 'Brown',
                age: 20,
                email: 'example@gmail.com',
                course: 'Geography',
                regDate: new Date(),
            },
            {
                id: 6,
                name: 'Olivia',
                lastname: 'Jones',
                age: 22,
                email: 'example@gmail.com',
                course: 'Art',
                regDate: new Date(),
            },
            {
                id: 7,
                name: 'Matthew',
                lastname: 'Davis',
                age: 19,
                email: 'example@gmail.com',
                course: 'Music',
                regDate: new Date(),
            },
            {
                id: 8,
                name: 'Sophia',
                lastname: 'Miller',
                age: 21,
                email: 'example@gmail.com',
                course: 'Physics',
                regDate: new Date(),
            },
            {
                id: 9,
                name: 'David',
                lastname: 'Wilson',
                age: 20,
                email: 'example@gmail.com',
                course: 'Chemistry',
                regDate: new Date(),
            },
            {
                id: 10,
                name: 'Emma',
                lastname: 'Taylor',
                age: 22,
                email: 'example@gmail.com',
                course: 'Biology',
                regDate: new Date(),
            },
        ];
    }
}
