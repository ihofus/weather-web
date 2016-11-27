import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, WeatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
