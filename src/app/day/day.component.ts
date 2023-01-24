import { Component, Input, OnInit } from '@angular/core';
import { Icon_map } from '../icon-map';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit{
  @Input() day!:string;
  @Input() dailyWeather!:any;

  iconName:any;
  iconMap=Icon_map

  ngOnInit(): void {
    this.iconName=this.iconMap.get(this.dailyWeather.iconCode)
    this.day=this.dailyWeather.day
  }

  
  /*
  0,1: faSun
  2: faCloudSun
  3:faCloud
  45,48:faSmog
  51,53,55,56,57,61,63,65,66,67,80,81,82: faRain
  71,73,75,77,85,86:faSnowflake
  95,96,99:faCloudBolt

  */

}
