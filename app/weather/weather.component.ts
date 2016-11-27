import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/interval';
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
  @Input()
  refreshInterval;
  weatherValues: Observable<WeatherValue[]>;
  createdAt;
  loading = false;

  constructor(private weatherService: WeatherService) { }

  private getWeather() {
    return this.weatherService.getCurrentWeather(this.sourceChanel.code, this.sourceChanel.readApiKey);
  }

  ngOnInit(): void {
    var self = this;
    this.weatherValues = Observable.interval(this.refreshInterval)
      .startWith(0)
      .flatMap(function () {
        self.loading = true;
        return self.getWeather();
      });

    this.weatherValues.subscribe(function (values) {
      self.loading = false;
      self.createdAt = values.length === 0 ? '' : values[0].createdAt;
    });
  }
}