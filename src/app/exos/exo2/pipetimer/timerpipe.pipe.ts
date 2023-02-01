import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerpipe',
})
export class TimerpipePipe implements PipeTransform {
  transform(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
