import { Restaurant } from "../restaurant";
import { RestaurantRepo } from "../restaurant.repo";

type CreateRestaurantDto = Omit<Restaurant, "id">;

export class CreateRestaurant {
  private restaurantRepo;

  constructor(restaurantRepo: RestaurantRepo) {
    this.restaurantRepo = restaurantRepo;
  }

  execute(input: CreateRestaurantDto): Restaurant {
    return this.restaurantRepo.create(new Restaurant(input));
  }
}
