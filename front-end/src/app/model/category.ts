export class Category {

  id: number;
  name: string;
  logo: string;
  data_create: Date;
  data_update: Date;


  constructor(id: number, name: string, logo: string, data_create: Date, data_update: Date) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.data_create = data_create;
    this.data_update = data_update;
  }
}
