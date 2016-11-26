import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { Chanel } from './weather/chanel';
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <weather [sourceChanel]="chanel1"></weather>
  `
})
export class AppComponent {
  public chanel1: Chanel;
  constructor() {
    this.chanel1 = new Chanel();
    this.chanel1.name = 'Test chanel';
    this.chanel1.code = 'ch1';
  }

}
