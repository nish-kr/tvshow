import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private shared: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.showDetails) {
      // Getting show details from shared service and parsing it into an object
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

  /**
   * Home function to redirect user to home page ( popular page )
   */
  home() {
    this.router.navigateByUrl('popular');
  }
}
