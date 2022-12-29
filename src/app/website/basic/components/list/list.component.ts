import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  name: string;
  users = [
    {
      name: 'Gaby',
      number: 2
    },
    {
      name: 'Nathaly',
      number: 24
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.users.push({
      name: this.name,
      number: 12
    })
    this.name = "";
  }

}
