import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const TIME: number = value / 60 ;
    if (Number.isInteger(TIME)) {
      return `${TIME}h`;
    }else {
      const Horas = Math.floor(TIME);
      let minutos = TIME - Horas;
      minutos = 60 * minutos ;
      return `${Horas}h${Math.floor(minutos)}m`;
    }
  }

}
