import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLinkDirective]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryString = input('myapp', { alias: 'appSafeLinkDirective' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLink Directive is running');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Deseja deixar a página?');

    if (wantsToLeave) {
      // const element = (event.target as HTMLAnchorElement).href;
      const element = this.hostElementRef.nativeElement.href;
      (event.target as HTMLAnchorElement).href = element + '?from=' + this.queryString();
      return;
    }

    event.preventDefault();
  }
}
