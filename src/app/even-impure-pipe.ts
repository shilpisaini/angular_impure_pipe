import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'evenImpurePipe',
    pure: false
})
export class EvenImpurePipe  implements PipeTransform {
  transform(nums: number[]) {
    return nums.filter(num => num%2==0);
  }
}