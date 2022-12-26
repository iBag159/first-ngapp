import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FibonacciPipe } from '@shared/pipes/fibonacci.pipe';
import { FormatDatePipe } from '@shared/pipes/format-date.pipe';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@NgModule({
  declarations: [
    FibonacciPipe,
    FormatDatePipe,
    ReversePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FibonacciPipe,
    FormatDatePipe,
    ReversePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
