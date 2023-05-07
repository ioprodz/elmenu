import { Command } from "../../.core/cqs";
import { Account } from "../account/account";
import { AccountRepo } from "../account/account.repo";

type CreateAccountDto = Omit<Account, "id">;

export class CreateAccount implements Command<CreateAccountDto, Account> {
  private readonly accountRepo: AccountRepo;

  constructor(accountRepo: AccountRepo) {
    this.accountRepo = accountRepo;
  }

  execute(input: CreateAccountDto): Account {
    const account = new Account(input);

    return this.accountRepo.create(account);
  }
}
