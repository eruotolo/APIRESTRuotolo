import { Pipe, PipeTransform } from '@angular/core';
import { UserInterface } from '@core/models/user.interface';
import { StudentInterface } from '@core/models/student.interface';

@Pipe({
    name: 'completename',
})
export class CompletenamePipe implements PipeTransform {
    transform(value: UserInterface, ...args: unknown[]): unknown {
        const newValue = `${value.name} ${value.lastname}`;
        switch (args[0]) {
            case 'mayuscula':
                return newValue.toUpperCase();
            case 'minuscula':
                return newValue.toLowerCase();
            default:
                return newValue;
        }
    }
}
