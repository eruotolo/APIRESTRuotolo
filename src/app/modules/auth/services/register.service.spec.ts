import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';

describe('RegisterService', () => {
    let service: RegisterService;
    let httpClient: HttpClient;

    beforeEach(() => {
        httpClient = {} as HttpClient;
        service = new RegisterService(httpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
