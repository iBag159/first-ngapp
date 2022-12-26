import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from '@product/components/product/product.component';
import { ProductListComponent } from '@product/components/product-list/product-list.component';

import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { FormatDatePipe } from '@shared/pipes/format-date.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
