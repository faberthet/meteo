import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { Icon_map } from './icon-map';


import { faCloud, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faCloud=faCloud
  title = 'meteo';
  days: string[]=["aujourd'hui","demain","mercredi","jeudi","vendredi","samedi","dimanche"]
  selectedDay!:string;

  //currentWeather:{[key: string]: number}={currentTemp:0,windSpeed:0,iconCode:0}
  currentWeather!:{currentTemp:number, windSpeed:number, iconCode:number}//={currentTemp:0,windSpeed:0,iconCode:0}
  dailyWeathers:any;
  hourlyWeather:any;

  selectedHourlyWeather!:any;

  iconName:any=faSpinner;
  iconMap=Icon_map

  constructor(private http:HttpClient, private weather:WeatherService){}


  isInit:boolean=false

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
        this.selectedHourlyWeather=this.hourlyWeather.filter(({day}:{day:string})=> day == this.selectedDay),
        this.iconName=this.iconMap.get(this.currentWeather['iconCode']),
        this.isInit=true
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
