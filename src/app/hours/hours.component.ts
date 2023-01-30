import { Component, Input, OnInit } from '@angular/core';
import { Icon_map } from '../icon-map';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
@Input() selectedDay!:string;
@Input() selectedHourlyWeather!:any;

faCloud=faCloud

iconMap=Icon_map;

ngOnInit(): void {
  console.log(this.selectedHourlyWeather)
}

toIcon(weatherCode:number):any{
 return this.iconMap.get(weatherCode)
}


}
