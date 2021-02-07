import { Pipe, PipeTransform } from '@angular/core';
import { Peliculas } from '../Interface/peliculas.interface';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  transform(pelicula: Peliculas[]): Peliculas[] {
    const URL = 'http://image.tmdb.org/t/p/w400';
    //const NOIMG = `../assets/img/no_img.png`;
    const NOIMG = 'src/assets/img/header.jpg';
    for (const img of pelicula) {
      if (img.poster_path) {
        img.poster_path = `${URL}${img.poster_path}`;
      } else if (img.backdrop_path) {
        img.backdrop_path = `${URL}${img.backdrop_path}`;
      }else {
        img.backdrop_path = NOIMG;
      }
    }
    return pelicula;
  }
}
