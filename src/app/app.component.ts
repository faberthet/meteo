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

  currentWeather:any;
  dailyWeathers:any;
  hourlyWeather:any;

  selectedHourlyWeather:any;

  constructor(private http:HttpClient, private weather:WeatherService){}

  ngOnInit(): void {
    this.getMeteo();
  }

  getMeteo(){
    this.weather.getWeather().subscribe({
      error: error => console.log(error),
      next: res => [
        console.log(res), 
        this.parseWeatherData(res), 
        this.selectedDay=this.dailyWeathers[0].day,
        this.selectedHourlyWeather=this.hourlyWeather.filter(({day}:{day:string})=> day == this.selectedDay)
      ]
    })
  }

  parseWeatherData(data:any){
    this.currentWeather=this.weather.parseCurrentWeather(data)
    this.dailyWeathers=this.weather.parseDailyWeather(data)
    this.hourlyWeather=this.weather.parseHourlyWeather(data)
    console.log(this.currentWeather)
    console.log(this.dailyWeathers)
    console.log(this.hourlyWeather)
  }

  selectDay(day:string){
    this.selectedDay=day;
    this.selectedHourlyWeather=this.hourlyWeather.filter(({day}:{day:string})=> day == this.selectedDay)
  }
}
