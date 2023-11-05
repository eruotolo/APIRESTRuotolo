import { Injectable } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor() {}

    getUsers(): UserInterface[] {
        console.log('retornando data mock');
        return [
            {
                id: 1,
                name: 'Edgardo',
                lastname: 'Ruotolo',
                email: 'edgardoruotolo@gmail.com',
                rol: 'Admin',
                password: 'admin',
                token: 'asdfghjklñasdfghjklñasdfghjklñ',
            },
            {
                id: 2,
                name: 'Mariano',
                lastname: 'Martinez',
                email: 'marianomartinez@gmail.com',
                rol: 'User',
                password: '123456',
                token: 'zxcvbnmzxcvbnmzxcvbnm',
            },
            {
                id: 3,
                name: 'Ignacio',
                lastname: 'De León',
                email: 'idelon@gmail.com',
                rol: 'User',
                password: '123456',
                token: 'qwertyuiopqwertyuiopqwertyuiop',
            },
        ];
    }
}
