import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { ProductService } from './services/product.service';
import { ProductComponent } from '@product/components/product/product.component';
import { ProductListComponent } from '@product/components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormAltComponent } from './components/product-form-alt/product-form-alt.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormAltComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
