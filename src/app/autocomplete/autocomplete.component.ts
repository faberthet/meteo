import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

  options!:["bleu","rouge","jaune"];
  filterOptions!:Observable<String[]>;
  formControl= new FormControl();


}
