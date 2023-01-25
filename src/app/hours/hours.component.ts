import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
@Input() selectedDay!:string;
@Input() selectedHourlyWeather!:any;


ngOnInit(): void {
  
}

}
