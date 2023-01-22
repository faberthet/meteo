import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meteo';
  days: string[]=["aujourd'hui","demain","mercredi","jeudi","vendredi","samedi","dimanche"]
  selectedDay!:string;

  constructor(private http:HttpClient, private weather:WeatherService){}

  ngOnInit(): void {
    this.getMeteo();
  }

  getMeteo(){
    this.weather.getWeather().subscribe({
      error: error => console.log(error),
      next: res => console.log(res)
    })
  }
}
