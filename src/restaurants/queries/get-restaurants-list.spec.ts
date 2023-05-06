import { RestaurantTestRepo } from "../restaurant.test.repo";
import { GetRestaurants } from "./get-restaurants-list";

describe("GetRestaurants", () => {
  it("lists restaurants", () => {
    const restaurantRepo = new RestaurantTestRepo();
    restaurantRepo.collection = [
      {
        id: "1",
        name: "Les Dunes",
        address: {
          street: "12 rue de la paix",
          city: "paris",
          postalCode: "75001",
        },
      },
      {
        id: "2",
        name: "Les Dunes",
        address: {
          street: "12 rue de la paix",
          city: "paris",
          postalCode: "75001",
        },
      },
    ];

    const getRestaurants = new GetRestaurants(restaurantRepo);
    const result = getRestaurants.execute();
    expect(result).toMatchObject(restaurantRepo.collection);
  });
});
