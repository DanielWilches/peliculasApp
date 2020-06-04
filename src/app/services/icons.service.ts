import { Injectable } from '@angular/core';
// import { moduleOrComponent } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



@Injectable({
  providedIn: 'root'
})
export class IconsService {
  faSearch = faSearch;
  constructor() { }
}
