import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, RouteReuseStrategy, Router, ActivationStart, ActivationEnd } from '@angular/router';
import { IconsService } from '../../services/icons.service';
import { PeliculasService } from '../../services/peliculas.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  searchform: FormGroup;
  arrayBuquedas: any[];
  textSearch: string;
  search: any;
  cargaComponente = {
    loading: false,
    error: false
  };
  constructor(public iconS: IconsService, private peliculaS: PeliculasService,
              private acRoute: ActivatedRoute,  private router: Router) {}

  ngOnInit(): void {
    const TEXT = this.acRoute.snapshot.params.keyText;
    if (TEXT) {
      this.validaciones(TEXT);
      this.getBusqueda(TEXT);
    }else{
      this.validaciones('');
    }
  }
  getBusqueda(busqueda: string) {
    this.cargaComponente.loading = true;
    this.peliculaS.buscarPelicula(busqueda).subscribe((resul: any) => {
      this.cargaComponente.loading = false;
      return this.arrayBuquedas = resul;
    }, (err: any) => {
      this.cargaComponente.loading = false;
      this.cargaComponente.error = true;
    });
  }
  formsearch(formulario: FormGroup) {
    this.getBusqueda(formulario.value[`search`]);
  }
  validaciones(text: string) {
    if ( text ){
      this.searchform = new FormGroup({
        search: new FormControl(text, [Validators.required, Validators.maxLength(20)])
      });
    }else{
      this.searchform = new FormGroup({
        search: new FormControl('', [Validators.required, Validators.maxLength(20)])
      });
    }
  }
}
