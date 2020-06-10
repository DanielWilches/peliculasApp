import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Peliculas } from '../../Interface/peliculas.interface';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Pcartelera: Peliculas[] = [];
  Ppopulares: Peliculas[] = [];
  PpopuInfatiles: Peliculas[] = [];
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
      return this.Pcartelera;
    }, err => console.log(err));
  }
  getPopulares() {
    this.PeliculasS.getPopulares().subscribe((resul) => {
      this.Ppopulares = resul;
      return this.Ppopulares;
    }, err => console.log(err));
  }
  getPopularesInfantiles() {
    this.PeliculasS.getPopularesInfantiles().subscribe((resul) => {
      this.PpopuInfatiles = resul;
      return this.PpopuInfatiles;
    }, err => console.log(err));
  }
}
