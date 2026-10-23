export class Pizza {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity?: number = 0;

  constructor(id: number, name: string, price: number, image?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }

  getPrice?(): number {
    return Math.round(this.price * 1.2 * 100) / 100;
  }
}
