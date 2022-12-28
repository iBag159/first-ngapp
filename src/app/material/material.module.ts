import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatTooltipModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
