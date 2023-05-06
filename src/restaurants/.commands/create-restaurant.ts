import { Command } from "../../.core/cqs";
import { Restaurant } from "../restaurant/restaurant";
import { RestaurantRepo } from "../restaurant/restaurant.repo";

type CreateRestaurantDto = Omit<Restaurant, "id">;

export class CreateRestaurant
  implements Command<CreateRestaurantDto, Restaurant>
{
  private restaurantRepo;

  constructor(restaurantRepo: RestaurantRepo) {
    this.restaurantRepo = restaurantRepo;
  }

  execute(input: CreateRestaurantDto): Restaurant {
    return this.restaurantRepo.create(new Restaurant(input));
  }
}
