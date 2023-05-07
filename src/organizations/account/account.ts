import { Entity } from "../../.core/entity";

function isValidEmail(email: string): boolean {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

export class Account extends Entity {
  readonly email: string;
  firstName: string;
  lastName: string;
  birthdateIsoString: string;

  constructor({
    id,
    email,
    firstName,
    lastName,
    birthdateIsoString,
  }: Partial<Account>) {
    super({ id });

    if (!email) {
      throw new Error(`email is a required field`);
    }
    if (!isValidEmail(email)) {
      throw new Error(`email '${email}' is invalid`);
    }
    this.email = email;

    if (firstName) {
      this.firstName = firstName;
    }

    if (lastName) {
      this.lastName = lastName;
    }

    if (birthdateIsoString) {
      this.birthdateIsoString = birthdateIsoString;
    }
  }
}
