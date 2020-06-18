import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
// import { Peliculas } from '../../Interface/peliculas.interface';
import { PeliculasService } from '../../services/peliculas.service';
// import { url } from 'inspector';
import { logging } from 'protractor';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {
  pelicula: any;
  cargadoComponente = {
    loading: true,
    err: false
  };
  constructor(private acRouter: ActivatedRoute, private router: Router, private peliculasS: PeliculasService) {
  }

  ngOnInit(): void {
    this.acRouter.params.subscribe((resul: object) => {
      this.getPelicula(resul[`id`]);
    });
  }

  getPelicula(id: number) {
    this.peliculasS.buscarPeliId(id).subscribe((res: object) => {
      setTimeout(() => {
        this.cargadoComponente.loading = false;
      }, 3000);
      this.pelicula = this.validoImg(res);
      return this.pelicula;
    }, err => {
      this.cargadoComponente.err = true;
    });
  }

  validoImg( pelicula: object ): object{
    const URL = 'http://image.tmdb.org/t/p/w500';
    const NOIMG = `../assets/img/no_img.png`;
    if  ( pelicula[`backdrop_path`] &&  pelicula[`poster_path`] ) {
      pelicula[`backdrop_path`] = `${URL}${pelicula[`backdrop_path`]}`;
      pelicula[`poster_path`] = `${URL}${pelicula[`poster_path`]}`;
    }else if ( pelicula[`backdrop_path`])  {
      pelicula[`backdrop_path`] = `${URL}${pelicula[`backdrop_path`]}`;
      pelicula[`poster_path`] = `${NOIMG}`;
    }else if (pelicula[`poster_path`]) {
      pelicula[`poster_path`] = `${URL}${pelicula[`poster_path`]}`;
      pelicula[`backdrop_path`] = `${NOIMG}`;
    }else {
      pelicula[`backdrop_path`] = `${NOIMG}`;
      pelicula[`poster_path`] = `${NOIMG}`;
    }
    // console.log(pelicula[`backdrop_path`]);
    // console.log(pelicula[`poster_path`]);
    // this.addFondo(pelicula[`backdrop_path`]);
    return pelicula;
  }
  addFondo( text: string ){
    const contenedor = document.querySelector('contenedor');
    contenedor.classList.add('prueba');
    return text;
   }


}
