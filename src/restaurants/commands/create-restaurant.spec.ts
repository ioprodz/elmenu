import { CreateRestaurant } from "./create-restaurant";
import { Restaurant } from "../restaurant";
import { RestaurantRepo } from "../restaurant.repo";

class RestaurantTestRepo implements RestaurantRepo {
  private collection: Restaurant[] = [];
  create(restaurant: Restaurant): Restaurant {
    this.collection.push(restaurant);
    return this.collection[this.collection.length - 1];
  }
}

describe("Create Restaurant", () => {
  it("should save the input object and give it an id", () => {
    const createRestaurant = new CreateRestaurant(new RestaurantTestRepo());
    const restaurant = {
      name: "Les Dunes",
      address: {
        street: "12 rue de la paix",
        city: "paris",
        postalCode: "75001",
      },
    };

    const result = createRestaurant.execute(restaurant);

    expect(result).toMatchObject(restaurant);
    expect(result.id).toBeDefined();
  });
});
