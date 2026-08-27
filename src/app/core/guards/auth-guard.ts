import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

export const authGuard: CanActivateFn = () => {
  const session = inject(SessionStorageService);
  const router = inject(Router);

  const jwtClient = session.getItem('token');

  if (jwtClient) {
    return true;
  }

  return router.createUrlTree(['/user/login']);
};
