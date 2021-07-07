import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  showDetails: any;
  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {

    // Getting show details from local storage and parsing it into an object
    this.showDetails = JSON.parse(localStorage.getItem('show') as string);
  }

  /**
   * Back function to return to previous screen on the browser
   */
  back() {
    window.history.back();
  }
}
