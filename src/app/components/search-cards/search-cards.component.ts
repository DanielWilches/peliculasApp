import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html'
})
export class SearchCardsComponent implements OnInit {
  @Input() arraybusqueda: any[];
  constructor( private  router: Router ) { }

  ngOnInit(): void {
  }

  goToPelicula(id: number) {
    this.router.navigate(['pelicula/', id]);

  }

}
