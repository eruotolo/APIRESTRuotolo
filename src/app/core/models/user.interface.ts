import { RolInterface } from '@core/models/rol.interface';

export interface UserInterface {
    id: number;
    name: string;
    lastname: string;
    email: string;
    rol: 'Admin' | 'User';
}
