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

  constructor(
    private router: Router,
    private shared: SharedService
  ) { }

  navigateToSearch(searchQuery: string) {
    this.shared.nextSearchResult(searchQuery);
    this.router.navigate(['searchResult']);
  }
}
