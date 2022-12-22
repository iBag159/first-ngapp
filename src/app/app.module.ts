import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReversePipe } from './reverse.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { ListComponent } from './components/list/list.component';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    FormatDatePipe,
    ListComponent,
    FibonacciPipe,
    HighlightDirective,
    UserListComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
