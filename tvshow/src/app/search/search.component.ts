import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult: any;

  constructor(
    private router: Router,
    private shared: SharedService
  ) { }

  ngOnInit(): void {

    // Fetching search result from local storage and parsing it into an Object
    this.shared.searchResult.subscribe(
      res => {
        this.searchResult = res;
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
  setShowDetails = (showDetails: any) => {
    this.shared.nextShowId(showDetails.show.id);
    this.router.navigateByUrl('details');
  }
}
