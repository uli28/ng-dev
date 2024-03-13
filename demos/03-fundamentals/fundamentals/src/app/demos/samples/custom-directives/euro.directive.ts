import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  // toEuro selector
  selector: '[toEuro]',
  standalone: true,
})
// solte eher in shared directive liegen, wird meistens öfters wiederverwendets
export class EuroDirective {
  elementRef = inject(ElementRef)
  private el: HTMLInputElement;

  constructor() {
    this.el = this.elementRef.nativeElement;
  }

  //$event angular variable, ausgelöstet event catchen, value auslesen
  // directive sitzt auf tag, tag ist der host, element ref ist gleich der tag
  // native element sagt es ist ein input
  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    this.el.value = value.replace(' €', '');
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    this.el.value = `${value} €`;
  }
}
function inject(ElementRef: any) {
  throw new Error('Function not implemented.');
}

