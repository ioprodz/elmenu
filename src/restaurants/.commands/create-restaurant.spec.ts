import { CreateRestaurant } from "./create-restaurant";
import { RestaurantTestRepo } from "../restaurant/restaurant.test.repo";

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
