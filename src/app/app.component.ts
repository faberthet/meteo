import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteo';
  days: string[]=["aujourd'hui","demain","mercredi","jeudi","vendredi","samedi","dimanche"]
  selectedDay!:string;


}
