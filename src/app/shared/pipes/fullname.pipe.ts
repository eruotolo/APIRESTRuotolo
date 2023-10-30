import { Pipe, PipeTransform } from '@angular/core';
import { StudentInterface } from '@core/models/student.interface';
@Pipe({
    name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
    transform(value: StudentInterface, ...args: unknown[]): unknown {
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
