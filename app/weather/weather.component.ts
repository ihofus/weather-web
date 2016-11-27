import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { WeatherService } from './weather.service';
import { Chanel } from './chanel';
import { WeatherValue } from './weather-value';
@Component({
  selector: 'weather',
  templateUrl: 'app/weather/weather.template.html',
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  @Input()
  sourceChanel: Chanel;
  weatherValues: Promise<WeatherValue[]>;
  createdAt;
  loading = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    var self = this;
    this.loading = true;
    this.weatherValues = this.weatherService.getCurrentWeather(this.sourceChanel.code, this.sourceChanel.readApiKey).toPromise();
    this.weatherValues.then(function (values) {
      self.loading = false;
      self.createdAt = values.length === 0 ? '' : values[0].createdAt;
    });
  }
}