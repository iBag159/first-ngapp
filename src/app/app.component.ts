import { Component } from '@angular/core';
import { Product } from './models/product.model';

interface User {
  name: string,
  age: number,
  isSingle: boolean,
  avatar: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title1 = 'Title 1';
  private title2 = 'Title 2';
  title = "Title";

  rockBands = ['Nirvana', 'Los Prisioneros', 'Soda Stereo']
  newRockBand = "";

  users: User[] = [
    {
      name: "Gaby",
      age: 211,
      isSingle: false,
      avatar: "assets/images/avatar.png"
    },
    {
      name: "Nathaly",
      age: 212,
      isSingle: false,
      avatar: "assets/images/nathaly-sipiran.jpg"
    }
  ]

  products: Product[] = [
    {
      title: "Product 1",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
    {
      title: "Product 2",
      description: "A beautiful product",
      image: "assets/images/avatar.png",
      price: "$12.00"
    },
  ]
  changeTitle() {
    this.title = this.title === this.title1 ? this.title2 : this.title1;
  }

  addRockBand() {
    this.rockBands.push(this.newRockBand);
    this.newRockBand = "";
  }

  deleteBands() {
    this.rockBands = [];
  }

  deleteABand(index: number) {
    this.rockBands.splice(index, 1);
  }

  editABand(index: number, newName: string) {
    this.rockBands[index] = newName;
  }
}
