import { Component, OnInit, Input } from '@angular/core';
import { IconsService } from '../../../services/icons.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor( public iconS: IconsService ) { }

  ngOnInit(): void {
  }

}
