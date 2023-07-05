import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DayComponent } from './day/day.component';
import { HoursComponent } from './hours/hours.component';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CityComponent } from './city/city.component';




@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    HoursComponent,
    AutocompleteComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
