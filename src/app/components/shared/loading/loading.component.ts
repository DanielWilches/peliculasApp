import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../../services/icons.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {

  constructor( public iconS: IconsService) { }

  ngOnInit(): void {
  }

}
