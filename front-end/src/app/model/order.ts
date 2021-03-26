export class Order {

  id: number;
  name: string;
  data_create: Date;
  data_update: Date;
  description: string;
  image: string;
  price: number;


  constructor(id: number, name: string, data_create: Date, data_update: Date, description: string, image: string, price: number) {
    this.id = id;
    this.name = name;
    this.data_create = data_create;
    this.data_update = data_update;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}
