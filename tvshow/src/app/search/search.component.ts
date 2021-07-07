import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    // Fetching search result from local storage and parsing it into an Object
    this.searchResult = JSON.parse(localStorage.getItem('searchResult') as string);
    console.log(this.searchResult);
  }

  /**
   * Functio to store show details in local storage to be redirected on to Details page
   * @param showDetails Parameter holding the detail of the show clicked upon
   */
  setShowDetails = (showDetails: any) => {
    localStorage.setItem('show', JSON.stringify(showDetails.show));
    this.router.navigateByUrl('details');
  }
}
