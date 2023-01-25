import { Component, Input, OnInit } from '@angular/core';
import { Icon_map } from '../icon-map';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
@Input() selectedDay!:string;
@Input() selectedHourlyWeather!:any;

iconMap=Icon_map;

ngOnInit(): void {
  
}

toIcon(weatherCode:number):any{
 return this.iconMap.get(weatherCode)
}


}
