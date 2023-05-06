import { Restaurant } from "./restaurant";
import { RestaurantRepo } from "./restaurant.repo";

export class RestaurantTestRepo implements RestaurantRepo {
  public collection: Restaurant[] = [];
  create(restaurant: Restaurant): Restaurant {
    this.collection.push(restaurant);
    return this.collection[this.collection.length - 1];
  }

  list(): Restaurant[] {
    return this.collection;
  }
}
