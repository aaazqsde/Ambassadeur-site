import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {ContactComponent} from "./contact/contact.component";
import {AmbassadeurDetailsComponent} from "app/ambassadeur_details/ambassadeur-details.component";
import {RestaurantDetailsComponent} from "./restaurant_details/restaurant-details.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ambassadeur-details', component: AmbassadeurDetailsComponent },
  { path: 'detail/:id', component: RestaurantDetailsComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
