import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  listOfShows: any[] = [];
  showBasedOnGenres: any = {};
  genres: string[] = [];

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getAllShows();
  }

  /**
   * Function to get all shows at the start of the application
   */
  getAllShows = () => {
    this.http.get('shows').subscribe(
      res => {
        if (res) {
          this.listOfShows = res as [];
        }
        this.getShowsOnGenres();
      },
      err => {
        console.log(err);
      }
    )
  }

  /**
   * Function to arrange all shows based on Genre's in ascending order of show ratings
   */
  getShowsOnGenres = () => {
    this.listOfShows.forEach(show => {
      show.genres.forEach((genre: string) => {
        if (this.showBasedOnGenres[genre] && this.showBasedOnGenres[genre].length) {
          this.showBasedOnGenres[genre].push(show);
        } else {
          this.showBasedOnGenres[genre] = [show];
        }
      });
    });
    Object.keys(this.showBasedOnGenres).forEach(genre => {
      this.genres.push(genre);
      this.showBasedOnGenres[genre].sort((a: any, b: any) => b.rating.average - a.rating.average);
    })
    console.log(this.showBasedOnGenres);
  }
}
