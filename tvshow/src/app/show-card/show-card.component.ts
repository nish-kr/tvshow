import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  @Input() showsArr: any[] = [];

  constructor(
    private router: Router,
    private shared: SharedService
  ) { }

  ngOnInit(): void { }

  /**
   * Function to pass on show details via shared service and navigate to details page
   * @param showDetails Details of the individual show
   */
  getShowDetails = (showDetails: any) => {
    this.shared.nextShowId(showDetails.id);
    this.router.navigateByUrl('details');
  }
}
