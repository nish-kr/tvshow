import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  showDetails: any;
  showId: any;
  constructor(
    private http: HttpService,
    private shared: SharedService
  ) { }

  ngOnInit(): void {
    console.log(this.showDetails);

    if (!this.showDetails) {
      // Getting show details from local storage and parsing it into an object
      this.shared.sharedShowId.subscribe(
        res => {
          this.showId = res;
          this.getShowDetails(res);
        },
        err => {
          console.error(err);
        }
      )
    }
  }

  getShowDetails(id: any) {
    this.http.get('shows', id).subscribe(
      res => {
        this.showDetails = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  /**
   * Back function to return to previous screen on the browser
   */
  back() {
    window.history.back();
  }
}
