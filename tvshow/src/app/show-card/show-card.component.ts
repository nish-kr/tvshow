import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  @Input() showsArr: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  /**
   * Function to pass on show details via local storage and navigate to details page
   * @param showDetails Details of the individual show
   */
  getShowDetails = (showDetails: any) => {
    console.log(showDetails);
    localStorage.setItem('show', JSON.stringify(showDetails));
    this.router.navigateByUrl('details');
  }
}
