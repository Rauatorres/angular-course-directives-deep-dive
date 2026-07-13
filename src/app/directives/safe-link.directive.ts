import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLinkDirective]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryString = input('myapp', { alias: 'appSafeLinkDirective' });

  constructor() {
    console.log('SafeLink Directive is running');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Deseja deixar a página?');

    if (wantsToLeave) {
      const element = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = element + '?from=' + this.queryString();
      return;
    }

    event.preventDefault();
  }
}
