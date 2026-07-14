import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private template = inject(TemplateRef);
  private view = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        // console.log('show element');
        this.view.createEmbeddedView(this.template);
      } else {
        // console.log('do not show element');
        this.view.clear();
      }
    });
  }
}
