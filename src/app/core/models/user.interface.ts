export interface UserInterface {
    id: number;
    name: string;
    lastname: string;
    email: string;
    rol: 'Admin' | 'User';
    password: string;
    token: string;
}
