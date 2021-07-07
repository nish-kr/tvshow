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
  searchQuery: string = '';
  searchResult: any;
  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllShows();
  }

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
      this.showBasedOnGenres[genre].sort((a: any, b: any) => b.weight - a.weight);
    })
    // console.log(this.showBasedOnGenres);
  }

  search() {
    this.http.get('search', 'shows?q=' + this.searchQuery).subscribe(
      res => {
        this.searchResult = res;
        console.log(this.searchResult);
        localStorage.setItem('searchResult', JSON.stringify(this.searchResult));
        this.router.navigateByUrl('search-result');
      },
      err => {
        console.log(err);
      }
    )
  }

}
