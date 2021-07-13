import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tvshow';
  searchQuery: string = '';
  searchResult: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private shared: SharedService
  ) { }

  search() {
    this.http.get('search', 'shows?q=' + this.searchQuery).subscribe(
      res => {
        this.searchResult = res;
        console.log(this.searchResult);
        this.shared.nextSearchResult(this.searchResult);

        // Checking if we're currently on the search page or not. If yes, then simply reload the page
        if (this.router.url === '/search-result') {
          window.location.reload();
        } else {
          this.router.navigate(['search-result']);
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
