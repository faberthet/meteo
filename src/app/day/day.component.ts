import { Component, Input } from '@angular/core';
import { faCloud,faSun,faCloudSun,faCloudShowersHeavy,faCloudSunRain, faSmog, faSnowflake, faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import { Icon_map } from '../icon-map';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() day!:string;
  faCloud=faCloud;
  faSun=faSun
  faCloudSun=faCloudSun
  faRain=faCloudShowersHeavy
  faCloudSunRain=faCloudSunRain
  faSmog=faSmog
  faSnowflake=faSnowflake
  faCloudBolt=faCloudBolt
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
