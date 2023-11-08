import { Injectable } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.local';

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    private baseUrl = environment.baseUrl + '/users';
    public users: UserInterface[] = [];
    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<UserInterface[]> {
        return this.httpClient.get<UserInterface[]>(this.baseUrl);
    }

    addUser(user: UserInterface): Observable<UserInterface> {
        return this.httpClient.post<UserInterface>(this.baseUrl, user);
    }
}
