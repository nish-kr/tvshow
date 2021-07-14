import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult: any[] = [];

  constructor(
    private http: HttpService,
    private router: Router,
    private shared: SharedService
  ) { }

  ngOnInit(): void {

    // Fetching search result from shared service and parsing it into an Object
    this.shared.searchResult.subscribe(
      res => {
        this.search(res);
      },
      err => {
        console.error(err);
      }
    )
  }

  /**
   * Function to call search API using search query, and store result in searchResult
   * @param searchQuery Search query based on which results will be shown
   */
  search(searchQuery: string) {
    this.http.get('search', `shows?q='${searchQuery}`).subscribe(
      res => {
        this.searchResult = res as [];
      },
      err => {
        console.error(err);
      }
    )
  }

  /**
   * Functio to store show details in shared service to be redirected on to Details page
   * @param showDetails Parameter holding the detail of the show clicked upon
   */
  setShowDetails(id: string) {
    this.shared.nextShowId(id);
    this.router.navigateByUrl('details');
  }


  /**
   * Home function to redirect user to home page ( popular page )
   */
  home() {
    this.router.navigateByUrl('popular');
  }
}
