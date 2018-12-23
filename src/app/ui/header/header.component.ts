import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
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
