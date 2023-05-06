export abstract class Entity {
  readonly id: string;
  constructor({ id }: Partial<Entity>) {
    this.id = id ?? `restaurant-${Math.random()}`;
  }
}
