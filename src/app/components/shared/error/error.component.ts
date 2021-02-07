import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../../services/icons.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {

  constructor( public iconS: IconsService ) { }

  ngOnInit(): void {
  }

}
