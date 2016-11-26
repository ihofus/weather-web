import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable()
export class WeatherService {
    getCurrentWeather(chanelCode: string): Weather {
        var data = {
            ch1: new Weather(),
            ch2: new Weather()
        };

        data.ch1.temperature = 22;
        data.ch1.humidity = 44;
        data.ch2.temperature = 33;
        data.ch2.humidity = 55;

        return data[chanelCode];
    }
}