import { Component } from '@angular/core';

import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  config = appConfig;
}
