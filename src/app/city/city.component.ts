import { getLocaleDayNames } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

cities:City[]=[{name:"Paris",lat:"48.87",long:"2.33"},
{name:"Lyon",lat:"45.75",long:"4.85"},
{name:"Marseille",lat:"43.30",long:"5.40"},
{name:"Rennes",lat:"48.11",long:"-1.67"},
{name:"Strasbourg",lat:"48.57",long:"7.75"}]

selectedCity:City={name:"Paris",lat:"48.87",long:"2.33"};
selectedCityName:string="Paris";

@Output() test:EventEmitter<any>=new EventEmitter();

ngOnInit(): void {
  
}

selectCity(){
  this.cities.forEach(city =>{
    if(this.selectedCityName==city.name){
      this.selectedCity=city;
    }
  })
  this.test.emit(this.selectedCity)
}

}


// paris: 48.87 2.33
// Lyon 45.75 4.85
// marseille 43.30 5.40
// rennes 
// strasbourg 48.57 7.75
