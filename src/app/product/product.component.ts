import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: Product;
  @Output() detailed = new EventEmitter<number>();

  viewDetails() {
    this.detailed.emit(this.product.id);
  }
}