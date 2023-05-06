import { Entity } from "./entity";

class TestEntity extends Entity {}

describe("creation", () => {
  it("should generate an id if not provided with one", () => {
    const entity = new TestEntity({});
    expect(entity.id).toBeDefined();
  });
});
