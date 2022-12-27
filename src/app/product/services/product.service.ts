import { Injectable } from '@angular/core';
import { Product } from '@product/models/product.model';

@Injectable()
export class ProductService {

  constructor() { }

  products: Product[] = [
    {
      id: 1,
      title: "Product 1",
      description: "A beautiful product",
      image: "assets/images/room-1.jpg",
      price: "80",
      updated: new Date('2019/12/12')
    },
    {
      id: 2,
      title: "Product 2",
      description: "A beautiful product",
      image: "assets/images/room-2.jpg",
      price: "150",
      updated: new Date('2021/12/12')
    },
    {
      id: 3,
      title: "Product 3",
      description: "A beautiful product",
      image: "assets/images/room-3.jpg",
      price: "120",
      updated: new Date('2022/12/12')
    },
  ]

  getall() {
    return this.products;
  }
  getById(id: string) {
    return this.products.find(p => p.id === parseInt(id));
  }
}
