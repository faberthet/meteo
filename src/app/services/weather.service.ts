import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  url:string='https://api.open-meteo.com/v1/'+
  'forecast?latitude=48.11&longitude=-1.67'+
  '&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m'+
  '&daily=weathercode,temperature_2m_max,temperature_2m_min'+
  '&current_weather=true&timeformat=unixtime&timezone=Europe%2FParis'

  // BaseUrl(){
  //   let timezone= Intl.DateTimeFormat().resolvedOptions().timeZone
  // }

  getWeather(){

    return this.http.get(this.url)
  }

  parseCurrentWeather({current_weather}:{current_weather:any}){
  const {
    temperature: currentTemp,
    windspeed: windSpeed,
    weathercode: iconCode
  } = current_weather
    return {
      currentTemp: Math.round(currentTemp),
      windSpeed: Math.round(windSpeed),
      iconCode
    }
  }

  

  parseDailyWeather({daily}:{daily:any}){
    return daily.time.map((time:number,index:number)=>{
      return {
        day: new Date(time * 1000).toLocaleDateString('fr-FR', { weekday: 'long' }),
        maxTemp: Math.round(daily.temperature_2m_max[index]),
        minTemp: Math.round(daily.temperature_2m_min[index]),
        iconCode: daily.weathercode[index]
      }
    })
  }

  parseHourlyWeather({hourly, current_weather}:{hourly:any, current_weather:any}){
    return hourly.time.map((time:number,index:number)=>{
      return {
        time,
        day: new Date(time * 1000).toLocaleDateString('fr-FR', { weekday: 'long' }),
        hour: new Date(time * 1000).toLocaleTimeString('fr-FR', { hour: 'numeric' }).replace(/^0(?:0:0?)?/, ''),
        temp: Math.round(hourly.temperature_2m[index]),
        flTemp: Math.round(hourly.apparent_temperature[index]),
        iconCode: hourly.weathercode[index],
        precipitation: hourly.precipitation[index],
        windSpeed: Math.round(hourly.windspeed_10m[index])
        
      }
    }).filter(({time}:{time:number})=> time >= current_weather.time)
  }
}
