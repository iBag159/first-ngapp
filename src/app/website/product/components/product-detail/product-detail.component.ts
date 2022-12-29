import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@product/models/product.model';
import { ProductService } from '@product/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.product = this.productService.getById(params.id);
    })
  }

}
