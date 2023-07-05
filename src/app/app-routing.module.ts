import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CityComponent } from './city/city.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'search', component: AutocompleteComponent},
  {path:'city', component: CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
