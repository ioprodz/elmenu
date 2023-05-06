import { Restaurant } from "./restaurant";

export interface RestaurantRepo {
  create(restaurant: Omit<Restaurant, "id">): Restaurant;
}
