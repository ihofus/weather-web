import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { WeatherValue } from './weather-value';

@Injectable()
export class WeatherService {

    private baseUrl = 'https://api.thingspeak.com/channels';

    constructor(private http: Http) { }

    getCurrentWeather(chanelCode: string, readApiKey: string): Observable<WeatherValue[]> {
        var url = this.baseUrl + `/${chanelCode}/feeds.json?results=1&api_key=${readApiKey}`;

        return this.http.get(url)
            .map(function (response) {
                var json = response.json();

                if (json.feeds.length === 0) {
                    return [];
                } else {
                    var fields = {};
                    for (var key in json.channel) {
                        if (key.match(/field\d/)) {
                            fields[key] = json.channel[key];
                        }
                    }

                    var values = [];

                    for (var key in json.feeds[0]) {
                        if (fields[key]) {
                            values.push(new WeatherValue(fields[key], json.feeds[0][key], json.feeds[0].created_at));
                        }
                    }
                    return values;
                }
            });

    }
}