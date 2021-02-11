import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = '8dcbb02ff53091b82b1169ec5547347e';
  private api = 'https://api.themoviedb.org/3';
  // private api = 'https://api.themoviedb.org/sw';
  private lenguageES = 'language=es';
  constructor(private http: HttpClient) {
    // this.getCartelera();
  }
  // en cartelera /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
  getCartelera() {
    const ACTUAL = new Date();
    const HASTA = new Date();
    HASTA.setDate(HASTA.getDate() + 7);
    const actualStr: string = this.validacionFecha(ACTUAL);
    const hastaStr: string = this.validacionFecha(HASTA);
    const URL = `${this.api}/discover/movie?primary_release_date.gte=${actualStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&${this.lenguageES}`;
    return this.http.jsonp(URL, 'callback').pipe(map(resul => resul[`results`]));
  }
  // /discover/movie?sort_by=popularity.desc
  getPopulares() {
    const URL = `${this.api}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&${this.lenguageES}`;
    return this.http.jsonp(URL, 'callback').pipe(map(res => res[`results`]));
  }
  // populares infatiles /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
  getPopularesInfantiles() {
    const URL = `${this.api}/discover/movie?certification_country=US&certification.lte=R&sort_by=popularity.desc&api_key=${this.apiKey}&${this.lenguageES}`;
    return this.http.jsonp(URL, 'callback').pipe(map(res => res[`results`]));
  }
  buscarPelicula(texto: string) {
    const URL = `${this.api}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&${this.lenguageES}`;
    return this.http.jsonp(URL, 'callback').pipe(map(res => res[`results`]));
  }
  // https://api.themoviedb.org/3/movie/550?api_key=8dcbb02ff53091b82b1169ec5547347e
  buscarPeliId(  idFilm: number ){
    const URL = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${this.apiKey}&${this.lenguageES}`;
    return this.http.jsonp(URL, 'callback').pipe(map( res => res) );
  }


  validacionFecha(fecha: Date): string {
    let fechaStr: string;
    if (fecha.getMonth() < 10 && fecha.getDate() < 10) {
      fechaStr = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-0${fecha.getDate()}`;
    } else if (fecha.getMonth() < 10) {
      fechaStr = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-${fecha.getDate()}`;
    } else if (fecha.getDate() < 10) {
      fechaStr = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-0${fecha.getDate()}`;
    } else {
      fechaStr = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
    }
    return fechaStr;
  }
}
