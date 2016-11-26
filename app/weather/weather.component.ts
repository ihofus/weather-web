import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chanel } from './chanel';
import { Weather } from './weather';
@Component({
  selector: 'weather',
  templateUrl: 'app/weather/weather.template.html',
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  @Input()
  sourceChanel: Chanel;
  weather:Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather = this.weatherService.getCurrentWeather(this.sourceChanel.code);
  }
}