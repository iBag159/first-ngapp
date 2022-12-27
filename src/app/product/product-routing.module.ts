import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '@product/components/product-list/product-list.component';
import { ProductDetailComponent } from '@product/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'all',
    component: ProductListComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
