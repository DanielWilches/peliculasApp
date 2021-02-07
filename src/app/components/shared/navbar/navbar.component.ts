import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { IconsService } from '../../../services/icons.service';

import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  formSearch: FormGroup;
  cargaComponent = {
    disintegrates: false
  };
  constructor(public iconsS: IconsService, private router: Router, private BreakpointObserver: BreakpointObserver) {
    this.validacion();
  }

  ngOnInit(): void {
  }

  navegar(text: string) {
    console.log(text);
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

  get widthScreen() {
    return this.BreakpointObserver.isMatched('(max-width: 767px)');
  }
  get screenWidth() {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

}
