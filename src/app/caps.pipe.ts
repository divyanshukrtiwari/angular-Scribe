import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapsPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let firstChar:string = value.substring(0,1);
    let lastChar:string = value.substring(1,value.length);

    let newValue = firstChar.toUpperCase() + lastChar.toLowerCase();
    
    return newValue;
  }

}
