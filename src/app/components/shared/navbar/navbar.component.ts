import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IconsService } from '../../../services/icons.service';
import { PeliculasService } from '../../../services/peliculas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  formSearch: FormGroup;
  constructor(  public iconsS: IconsService, private PeliculasS: PeliculasService ) {
    this.validacion();
  }

  ngOnInit(): void {
  }
  search( forma: any){
    if ( forma.status === 'INVALID' ){
      console.log('estado invalido');
      console.log(forma);
      return;
    }else {
      console.log(forma.value.search);
      this.PeliculasS.buscarPelicula(forma.value.search).subscribe((resul: any) => {
        console.log(resul);
      });
    }
  }


  validacion() {
    this.formSearch = new FormGroup({
      search: new FormControl ('', [ Validators.required, Validators.maxLength(30)])
    });
  }

}
