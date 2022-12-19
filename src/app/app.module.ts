import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReversePipe } from './reverse.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { ListComponent } from './components/list/list.component';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    FormatDatePipe,
    ListComponent,
    FibonacciPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
