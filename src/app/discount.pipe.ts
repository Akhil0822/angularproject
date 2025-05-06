import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: false
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    console.log("constructor called")
    return (value - value * args[0] / 100);
  }

}
