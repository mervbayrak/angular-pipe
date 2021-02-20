import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe
({
  name: 'some'
})
export class SomePipe implements PipeTransform {

  transform(input: any, func: Function): any {
    if (!isArray(input) || !func) {
      return input;
    }

    const arr = new Array();
    
    for (let i = 0; i < input.length; i++) {
      if(func(input[i], input)) {
        arr.push(input[i]);
      }
    }
    
    return arr;
  }
}

