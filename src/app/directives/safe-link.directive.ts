import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLinkDirective]',
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLink Directive is running');
  }
}
