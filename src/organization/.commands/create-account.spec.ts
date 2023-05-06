import { AccountTestRepo } from "../account/account.test.repo";
import { CreateAccount } from "./create-account";

describe("Create Account", () => {
  it("should save the input object and give it an id", () => {
    const createAccount = new CreateAccount(new AccountTestRepo());

    const account = {
      email: "test@example.com",
      firstName: "Jilali",
      lastName: "Tiarti",
      birthdateIsoString: "1990-10-23",
    };

    const result = createAccount.execute(account);

    expect(result).toMatchObject(account);
    expect(result.id).toBeDefined();
  });
});
