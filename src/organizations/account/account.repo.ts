import { Account } from "./account";

export interface AccountRepo {
  create(restaurant: Omit<Account, "id">): Account;
}
