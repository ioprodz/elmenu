import { Account } from "./account";

describe("Account", () => {
  describe("validation", () => {
    describe("email", () => {
      it("detects empty string", () => {
        expect(
          () =>
            new Account({
              email: "",
            })
        ).toThrowError();
      });
      it("detects missing email field", () => {
        expect(
          () =>
            new Account({
              firstName: "John",
            })
        ).toThrowError();
      });
      it("detects malformatted email", () => {
        expect(
          () =>
            new Account({
              email: "invalid-email",
            })
        ).toThrowError();
      });
    });
  });
});
