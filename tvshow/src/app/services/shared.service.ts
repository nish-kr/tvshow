import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showId = new BehaviorSubject('1');
  private search = new BehaviorSubject('test');
  sharedShowId = this.showId.asObservable();
  searchResult = this.search.asObservable();

  constructor() { }

  nextShowId(showId: string) {
    this.showId.next(showId)
  }

  nextSearchResult(search: string) {
    this.search.next(search)
  }
}
