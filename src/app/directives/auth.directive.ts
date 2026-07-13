import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('show element');
      } else {
        console.log('do not show element');
      }
    });
  }
}
