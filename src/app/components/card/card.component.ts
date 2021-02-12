import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Peliculas } from '../../Interface/peliculas.interface';
import { DataUIService } from './../../services/data-ui.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent implements OnInit {
  @ViewChild('cardPeli', { static: false }) cardPeli: ElementRef;
  @Input() Pelicula: Peliculas[];
  hoverActived: boolean;
  constructor(private router: Router, public dataUi: DataUIService, public reder: Renderer2) {


  }

  ngOnInit(): void {
    if (window.screen.width > 1024) {
      this.hoverActived = true;
    } else {
      this.hoverActived = false;
    }
  }

  goPelicula(idFilm: number) {
    this.router.navigate(['pelicula', idFilm]);
  }

  @HostListener('window:resize', ['$event'])
  getwidth(event) {
    this.reder.addClass(this.cardPeli.nativeElement, 'cardHover')
    if (event.target.innerWidth > 1024) {
      this.hoverActived = true;
      this.reder.addClass(this.cardPeli.nativeElement, 'cardHover')
    } else {
      this.hoverActived = false;
      this.reder.removeClass(this.cardPeli.nativeElement, 'cardHover')
    }
  }

}
