import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicRoutingModule } from './basic-routing.module';

import { LayoutComponent } from '@basic/components/layout/layout.component';
import { ListComponent } from '@basic/components/list/list.component';

import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutingModule,
    SharedModule
  ]
})
export class BasicModule { }
