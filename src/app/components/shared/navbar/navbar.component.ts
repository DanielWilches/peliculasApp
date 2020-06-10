import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconsService } from '../../../services/icons.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  formSearch: FormGroup;
  constructor(public iconsS: IconsService, private router: Router) {
    this.validacion();
  }

  ngOnInit(): void {
  }
  // getsearch(text: string) {
  //   this.PeliculasS.buscarPelicula(text).subscribe((resul: any) => {
  //     console.log(resul);
  //   });
  // }

  search(forma: FormGroup) {
    if (forma.status === 'INVALID') {
      console.log('estado invalido');
      return;
    } else {
      this.router.navigate(['buscado/', forma.value[`search`]]);
      forma.controls.search.reset('');
      forma.controls[`search`].setErrors(null);
    }
  }


  validacion() {
    this.formSearch = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }
}
