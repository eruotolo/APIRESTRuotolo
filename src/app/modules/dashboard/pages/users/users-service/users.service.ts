import { Injectable } from '@angular/core';

import { UserInterface } from '@core/models/user.interface';
import { environment } from '../../../../../../environments/environment.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private baseUrl = environment.baseUrl + '/users';
    public users: UserInterface[] = [];
    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<UserInterface[]> {
        return this.httpClient.get<UserInterface[]>(this.baseUrl);
    }

    addUser(user: UserInterface): Observable<UserInterface> {
        return this.httpClient.post<UserInterface>(this.baseUrl, user);
    }

    updateUser(userId: number, user: UserInterface): Observable<UserInterface> {
        const url = `${this.baseUrl}/${userId}`;
        return this.httpClient.put<UserInterface>(url, user);
    }
    deleteUser(userId: number): Observable<void> {
        const url = `${this.baseUrl}/${userId}`;
        return this.httpClient.delete<void>(url);
    }
}
