import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  private title1 = 'Title 1';
  private title2 = 'Title 2';
  title = "Title";

  rockBands = ['Nirvana', 'Los Prisioneros', 'Soda Stereo']
  newRockBand = "";

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
