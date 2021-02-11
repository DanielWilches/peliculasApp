import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Peliculas } from '../../Interface/peliculas.interface';
import { Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  Pcartelera: Peliculas[] = [];
  Ppopulares: Peliculas[] = [];
  PpopuInfatiles: Peliculas[] = [];
  mesageError: string;
  cargado = {
    Cartelera: true,
    Populares: true,
    PopularesInfantiles: true,
    error: false
  };
  urlAnterior: string;
  constructor(private PeliculasS: PeliculasService, private router: Router) {
    this.getCartelera();
    this.getPopulares();
    this.getPopularesInfantiles();
  }

  ngOnInit(): void {
  }
  getCartelera() {

    this.PeliculasS.getCartelera().subscribe((resul: any) => {
      this.Pcartelera = resul;
        this.cargado.Cartelera = false;
      return this.Pcartelera;
    }, err => {
      this.cargado.PopularesInfantiles = false;
      this.cargado.error = true;
    });
  }
  getPopulares() {

    this.PeliculasS.getPopulares().subscribe((resul) => {
      this.Ppopulares = resul;
        this.cargado.Populares = false;
      return this.Ppopulares;
    }, err => {
      this.cargado.PopularesInfantiles = false;
      this.cargado.error = true;
    });
  }
  getPopularesInfantiles() {

    this.PeliculasS.getPopularesInfantiles().subscribe((resul) => {
      this.PpopuInfatiles = resul;
        this.cargado.PopularesInfantiles = false;
      return this.PpopuInfatiles;
    }, err => {
      this.cargado.PopularesInfantiles = false;
      this.cargado.error = true;
    });
  }
}
