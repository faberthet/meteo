import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DayComponent } from './day/day.component';
import { HoursComponent } from './hours/hours.component';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    HoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
