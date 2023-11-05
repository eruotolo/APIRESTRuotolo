import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { map } from 'rxjs';

export const dashboardGuard: CanActivateFn = (route, state) => {
    console.log('Guards Dashboards');

    const router = inject(Router);
    const authService = inject(AuthService);

    return authService
        .verifyToken()
        .pipe(
            map((isAuthenticated) =>
                isAuthenticated ? true : router.createUrlTree(['/auth/login']),
            ),
        );
};
