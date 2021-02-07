import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from '../../Interface/peliculas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() Pelicula: Peliculas[];
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  goPelicula( idFilm: number) {
    this.router.navigate(['pelicula', idFilm]);
  }

}
