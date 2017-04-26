import {Injectable} from "@angular/core";
import {Restaurant} from "./restaurant/restaurant";
import {RESTAURANTS} from "./restaurant/mock-restaurant";
@Injectable ()
export class AppService {


  getRestaurants(): Promise<Restaurant[]>{
    return Promise.resolve(RESTAURANTS);
  }
  getRestau(id: number): Promise<Restaurant> {
    return this.getRestaurants()
      .then(restaurants => restaurants.find(restau => restau.id ===id));

  }

}
