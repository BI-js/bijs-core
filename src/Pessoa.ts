export class Pessoa {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): typeof this.name {
    return this.name;
  }
}