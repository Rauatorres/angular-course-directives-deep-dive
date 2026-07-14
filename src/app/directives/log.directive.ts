import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  private element = inject(ElementRef);

  onLog() {
    console.log('CLICKED');
    console.log(this.element.nativeElement);
  }
}
