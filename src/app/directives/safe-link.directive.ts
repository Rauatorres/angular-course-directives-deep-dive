import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLinkDirective]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLink Directive is running');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Deseja deixar a página?');

    if (wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
