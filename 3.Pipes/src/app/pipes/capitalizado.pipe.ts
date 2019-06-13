import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, all:boolean = true ): string {
    if(value) {
      value = value.toLowerCase();
      let names = value.split(' ');

      if (all) {
        for (let i in names) {
          names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
      } else {
        names[0] = names[0][0].toUpperCase() + names[0].substr(1);
      }




      return names.join(" ");
    } else {
      return 'Sin valor';
    }
  }
}