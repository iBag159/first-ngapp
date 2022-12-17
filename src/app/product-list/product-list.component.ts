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
      title: "Product 1",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
    {
      title: "Product 2",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
