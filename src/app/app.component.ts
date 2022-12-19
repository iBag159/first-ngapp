import { Component } from '@angular/core';

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
