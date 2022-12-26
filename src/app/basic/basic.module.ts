import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicRoutingModule } from './basic-routing.module';

import { LayoutComponent } from '@basic/components/layout/layout.component';
import { ListComponent } from '@basic/components/list/list.component';

import { FibonacciPipe } from '@shared/pipes/fibonacci.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    FibonacciPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
