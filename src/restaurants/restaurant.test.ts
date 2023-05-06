import { Restaurant } from "./restaurant";

describe("Restaurant", () => {
  it("is defined", () => {
    expect(Restaurant).toBeTruthy();
  });

  describe("validation", () => {
    it("requires a name", () => {
      expect(
        () =>
          new Restaurant({
            address: {
              street: "12 dqsd qsdqs",
              city: "dqsdqd",
              postalCode: "12423",
            },
          })
      ).toThrow(Error);

      expect(
        () =>
          new Restaurant({
            name: "",
            address: {
              street: "12 dqsd qsdqs",
              city: "dqsdqd",
              postalCode: "12423",
            },
          })
      ).toThrow(Error);
    });

    it("requires an address", () => {
      expect(
        () =>
          new Restaurant({
            name: "Hmanna",
          })
      ).toThrow(Error);
    });
  });
});
