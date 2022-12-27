import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from '@product/components/product/product.component';
import { ProductListComponent } from '@product/components/product-list/product-list.component';

import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { FormatDatePipe } from '@shared/pipes/format-date.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductService } from '@product/services/product.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    FormatDatePipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
