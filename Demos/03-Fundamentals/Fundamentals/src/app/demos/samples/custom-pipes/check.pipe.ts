import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toChecked',
})
export class CheckPipe implements PipeTransform {
  transform(checked: boolean): any {
    const result: string =
      checked == true ? '<i class="material-icons">check</i>' : '';
    return result;
  }
}
