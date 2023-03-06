import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result = '';
    switch (true) {
      case value <= 0:
        throw new Error('Invalid param');
      case value == 1:
        result = 'outrageous';
        break;
      case value == 2:
        result = 'excellent';
        break;
      case value == 3:
        result = 'quite good';
        break;
      case value == 4:
        result = 'could be better';
        break;
      case value == 5:
        result = 'too bad';
        break;
      default:
        throw new Error('Argument out of range');
    }
    return result;
  }
}
