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
    this.searchResult = JSON.parse(localStorage.getItem('searchResult') as string);
    console.log(this.searchResult);
  }

  getShowDetails = (showDetails: any) => {
    localStorage.setItem('show', JSON.stringify(showDetails));
    this.router.navigateByUrl('details');
  }
}
