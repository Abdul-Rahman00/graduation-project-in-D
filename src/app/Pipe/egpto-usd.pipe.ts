import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eGPtoUSD',
  standalone: true
})
export class EGPtoUSDPipe implements PipeTransform {

  transform(value: number): number {
    return value*15;
  }

}
