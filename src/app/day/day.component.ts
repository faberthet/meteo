import { Component, Input } from '@angular/core';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() day!:string;
  faCloud=faCloud;

}
