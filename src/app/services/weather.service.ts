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
  '&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin'

// getWeather(lat:number,lon:number,timezone:any){
    /*const headerDict = {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*'
  }
  let headers= new HttpHeaders(headerDict);
  headers.append('Access-Control-Allow-Origin', '*')
  return this.http.get(this.url, { headers:headers } ) */
// return this.http.get(this.url)
// }


  getWeather(){
    return this.http.get(this.url)
  }

  parseCurrentWeather({current_weather}:{current_weather:any}){
  const {
    temperature: currentTemp,
    windspeed: windSpeed,
    weatherCode: iconCode
  } = current_weather
    return {
      currentTemp,
      windSpeed,
      iconCode
    }
  }

  parseDailyWeather({daily}:{daily:any}){
  const {
    temperature_2m_max: {maxTemp},
    temperature_2m_min: {minTemp},
    weatherCode: {iconCode}
  } = daily
    return {
      maxTemp,
      minTemp,
      iconCode
    }
  }

  parseHourlyWeather({hourly}:{hourly:any}){
  const {
    temperature_2m: {temp},
    windspeed_10m: {windSpeed},
    weatherCode: {iconCode},
    apparent_temperature:{flTemp},
    precipitation:{precip}
  } = hourly
    return {
      temp,
      windSpeed,
      iconCode,
      flTemp,
      precip
    }
  }

}
