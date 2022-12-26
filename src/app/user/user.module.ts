import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserListComponent } from '@user/components/user-list/user-list.component';
import { UsersService } from '@user/services/users.service';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
