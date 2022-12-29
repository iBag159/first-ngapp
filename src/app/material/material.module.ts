import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatTooltipModule, MatInputModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

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
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
