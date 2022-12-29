import { Component, OnInit } from '@angular/core';
import { Product } from '@product/models/product.model';
import { ProductService } from '@product/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getall();
  }

  onDetailed(id: number) {
    console.log(id);
  }
}
