import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';

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
    private router: Router
  ) { }

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
