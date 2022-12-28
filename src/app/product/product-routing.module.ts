import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '@product/components/product-list/product-list.component';
import { ProductDetailComponent } from '@product/components/product-detail/product-detail.component';
import { ProductFormComponent } from '@product/components/product-form/product-form.component';
import { ProductFormAltComponent } from './components/product-form-alt/product-form-alt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    component: ProductListComponent
  },
  {
    path: 'create-alt',
    component: ProductFormAltComponent
  },
  {
    path: 'create',
    component: ProductFormComponent
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
