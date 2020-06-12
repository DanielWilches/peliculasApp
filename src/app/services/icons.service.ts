import { Injectable } from '@angular/core';
// import { moduleOrComponent } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCompactDisc, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



@Injectable({
  providedIn: 'root'
})
export class IconsService {
  faSearch = faSearch;
  faCompactDisc = faCompactDisc;
  faTimesCircle =  faTimesCircle;
  constructor() { }
}
