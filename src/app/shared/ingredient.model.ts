
export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  // short cut (adding an accessor)
  // constructor(public name: string, amount:number) {

  // }
}