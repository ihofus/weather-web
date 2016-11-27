import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { Chanel } from './weather/chanel';
@Component({
  selector: 'my-app',
  template: `
  <weather [sourceChanel]="chanel1" [refreshInterval]="'10000'"></weather>
  `
})
export class AppComponent {
  public chanel1: Chanel;
  constructor() {
    this.chanel1 = { name: 'Test place', code: '194743', readApiKey: 'ISATC8TCNVTMVE80' };
  }

}
