import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './errors/e404/e404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/all',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: '**',
    component: E404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
