
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import { IconsService } from '../../../services/icons.service';
import { DataUIService } from './../../../services/data-ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  formSearch: FormGroup;
  scrollTop$: Observable<number>;
  cargaComponent = {
    disintegrates: false
  };
  count: number = 0;


  @ViewChild('sliderMenu', { static: false }) sliderMenu: ElementRef;
  @ViewChild('busqueda', { static: false }) busqueda: ElementRef;

  constructor(public iconsS: IconsService, public DataUI:DataUIService, private router: Router, private reder: Renderer2) {
    this.validacion();
  }

  ngOnInit(): void {
    setTimeout(() => {
    this.formateo();
    }, 10);
  }

  navegar(text: string) {
    console.log(text);
    // if (text === 'buscador' && !this.cargaComponent.disintegrates) {
    //   this.reder.setStyle(this.busqueda.nativeElement, 'display', 'none');
    // } else {
    // this.reder.setStyle(this.busqueda.nativeElement, 'display', 'flex');
    // }
    // if (window.screen.width < 1024) {
    // this.reder.setStyle(this.sliderMenu.nativeElement, 'display', 'none');
    // }
    this.count = 0;
    this.router.navigate([`${text}/`]);
    this.cargaComponent.disintegrates = false;
  }
  search(forma: FormGroup) {
    if (forma.status === 'INVALID') {
      console.log('estado invalido');
      return;
    } else {
      this.router.navigate(['buscado/', forma.value[`search`]]);
      forma.controls.search.reset('');
      forma.controls[`search`].setErrors(null);
      this.cargaComponent.disintegrates = true;
    }
  }


  validacion() {
    this.formSearch = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.maxLength(40)])
    });
  }

  // captura del ancho de la pantalla del cliente
  @HostListener('window:resize', ['$event']) onResize(event) {
    console.log('navbar',event.target.innerWidth)

    if (event.target.innerWidth < 1024) {
      this.reder.setStyle(this.sliderMenu.nativeElement, 'display', 'none');
    } else {
      this.reder.setStyle(this.sliderMenu.nativeElement, 'display', 'flex');
      this.reder.removeClass(this.sliderMenu.nativeElement, 'menu-Activado');
    }
    this.count = 0;
  }

  menuToggle(event: Event) {
    this.count = this.count + 1;
    if (this.count === 1) {
      this.reder.addClass(this.sliderMenu.nativeElement, 'menu-Activado');
      this.reder.setStyle(this.sliderMenu.nativeElement, 'display', 'flex');
    }else {
      this.reder.removeClass(this.sliderMenu.nativeElement, 'menu-Activado');
      this.reder.setStyle(this.sliderMenu.nativeElement, 'display', 'none');
    }
    if (this.count > 1) {
      this.count = 0;
    }
    console.log(this.count)
  }
  formateo() {
    if (window.screen.width <= 1024) {
      this.reder.setStyle(this.sliderMenu.nativeElement, 'display', 'none');
    }
  }
}
