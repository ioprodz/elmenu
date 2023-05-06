import { Query } from "../../core/cqs";
import { Restaurant } from "../restaurant";
import { RestaurantRepo } from "../restaurant.repo";

export class GetRestaurants implements Query<void, Restaurant[]> {
  private restaurantRepo: RestaurantRepo;
  constructor(restaurantRepo: RestaurantRepo) {
    this.restaurantRepo = restaurantRepo;
  }

  execute(): Restaurant[] {
    return this.restaurantRepo.list();
  }
}
