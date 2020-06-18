import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../../services/icons.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public redes = {
    githud: 'https://github.com/DanielWilches',
    linkedin: 'https://www.linkedin.com/in/daniel-wilches-12907619a/',
    instagram: 'https://www.instagram.com/danielwilches.dev/',
    facebook: 'https://www.facebook.com/daniel.wilches.90/'
  };
  year = new Date();
  constructor(public iconS: IconsService) {
  }

  ngOnInit(): void {
  }

}
