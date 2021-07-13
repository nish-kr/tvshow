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

  constructor() { }

  ngOnInit(): void {
    if (this.shows.length < 5) {
      this.endIndex = this.shows.length;
    } else {
      this.endIndex = 5;
    }
  }

  /**
   * Function ot jump to previous 5 shows on the list of shows
   */
  prev() {
    this.startIndex -= 5;
    this.endIndex -= 5;
    if (this.startIndex < 0) {
      this.startIndex = 0;
      this.endIndex = 5;
    }
  }

  /**
   * Function ot jump to next upto 5 shows on the list of shows
   */
  next() {
    if (this.endIndex >= this.shows.length) {
      this.startIndex = this.shows.length - 5;
      this.endIndex = this.shows.length;
    } else {
      this.startIndex += 5;
      this.endIndex += 5;
    }
  }
}
