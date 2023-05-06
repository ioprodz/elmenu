import { Account } from "./account";
import { AccountRepo } from "./account.repo";

export class AccountTestRepo implements AccountRepo {
  public collection: Account[] = [];
  create(restaurant: Account): Account {
    this.collection.push(restaurant);
    return this.collection[this.collection.length - 1];
  }
}
