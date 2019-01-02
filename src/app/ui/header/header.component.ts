import { Component, OnInit, Input } from '@angular/core';
import {PagesService} from '../../pages/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [PagesService]
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() links = [];

  isMobileNavOpen = false;

  constructor() { }

  ngOnInit() {
  }
  
  

  collapseMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

}
