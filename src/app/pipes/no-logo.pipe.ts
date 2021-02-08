import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noLogo'
})
export class NoLogoPipe implements PipeTransform {

  transform(value: string): string {
    const URL = 'http://image.tmdb.org/t/p/w500';
    // dev
    // const NOIMG = `../assets/img/no_img.png`;
    // product
    const NOIMG = 'assets/img/no_img.png';
    if (value) {
      value = `${URL}${value}`;
    } else {
      value = `${NOIMG}`;
    }
    return value;
  }

}
