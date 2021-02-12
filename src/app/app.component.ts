
import { Component, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PeliculasService } from './services/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'peliculasApp';
  @ViewChild('header', { static: false }) header: ElementRef;
  @ViewChild('main', { static: false }) main: ElementRef;
  @ViewChild('footer', { static: false }) footer: ElementRef;
  constructor(public reder: Renderer2) {
    this.addClassHeader();
  }

  addClassHeader() {
    fromEvent(document, 'scroll').subscribe(value => {
      if (document.documentElement.scrollTop>50) {
        this.reder.addClass(this.header.nativeElement, 'headerActivated');
        this.reder.addClass(this.main.nativeElement, 'main100');
        // .main100
      } else if (document.documentElement.scrollTop < 50){
        this.reder.removeClass(this.header.nativeElement, 'headerActivated');
        this.reder.removeClass(this.main.nativeElement, 'main100');
      }
    });
  }




}
