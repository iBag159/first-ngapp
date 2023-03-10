import { Component, OnInit } from '@angular/core';
import { UsersService } from '@user/services/users.service';
import { User } from '@user/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users
    });
  }

}
