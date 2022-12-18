import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: "Product 1",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
    {
      id: 2,
      title: "Product 2",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
    {
      id: 3,
      title: "Product 3",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onDetailed(id: number) {
    console.log(id);
  }
}
