import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectIterator',
  pure: false
})
export class ObjectIteratorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Object.keys(value).map(key => value[key]);
  }

}
