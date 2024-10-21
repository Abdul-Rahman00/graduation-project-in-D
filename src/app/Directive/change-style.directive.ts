import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ChangeStyle]',
  standalone: true
})
export class ChangeStyleDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.color = 'red';
    elem.nativeElement.style.border = '2px solid';
  }
  
}
