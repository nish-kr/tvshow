import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() shows: any[] = [];
  @Input() genreName: string = '';

  startIndex: number = 0;
  endIndex: number = 0;

  showNext: boolean = true;
  showPrev: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (this.shows.length > 5 && this.endIndex - this.startIndex < 5) {
      this.endIndex = 5;
    }

    if (this.endIndex - this.startIndex < 5) {
      this.showNext = false;
    }

    // if (this.startIndex === 0) {
    //   this.showPrev = false;
    // }
  }

  prev() {
    if (this.startIndex - 5 > 0) {
      this.startIndex -= 5;
      this.endIndex -= 5;
    } else {
      this.startIndex = 0;
      this.endIndex = 5;
    }
  }

  next() {
    if (this.shows.length > 5 && this.endIndex !== this.shows.length) {
      this.startIndex += 5;
      if (this.endIndex + 5 > this.shows.length) {
        this.endIndex = this.shows.length;
      } else {
        this.endIndex += 5;
      }
    }
  }
}
