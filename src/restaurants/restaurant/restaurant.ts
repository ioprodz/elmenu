import { Entity } from "../../.core/entity";

class Address {
  street: string;
  city: string;
  postalCode: string;

  constructor({ street, city, postalCode }: Address) {
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
  }
}

export class Restaurant extends Entity {
  name: string;
  address: Address;

  constructor({ id, name, address }: Partial<Restaurant>) {
    super({ id });

    if (name && name.length > 0) {
      this.name = name;
    } else {
      throw new Error("Name must not be empty");
    }
    if (address) {
      this.address = new Address(address);
    } else {
      throw new Error("Address must not be empty");
    }
  }
}
