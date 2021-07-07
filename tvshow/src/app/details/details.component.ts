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
    this.showDetails = JSON.parse(localStorage.getItem('show') as string);
    // this.getShowDetails('1');
  }

  getShowDetails = (showId: string) => {
    this.http.get('shows', showId).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
