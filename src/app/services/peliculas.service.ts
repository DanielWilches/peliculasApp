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
  constructor( private JSONP: HttpClientJsonpModule,  private http: HttpClient) {
  }

  getPopulares() {
    console.log('inicio el metodo');

    const URL = `${this.api}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(URL, 'callback').subscribe((resul: any) => {
      console.log(resul);
    }, (err) => {
      console.log(err);
    });
  }
  // https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test

  buscarPelicula(texto: string) {
    // tslint:disable-next-line: max-line-length
    const URL = `${this.api}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(URL, 'callback').pipe(
      map(res => console.log(res)));
  }

}
