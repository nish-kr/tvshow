import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private TVSHOW_BASEURL = ' https://api.tvmaze.com/';

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * 
   * @param url URL for the API call
   * @returns Returns an Observable Object
   */
  public get(url: string, query?: string) {
    let getUrl = '';
    if (query) {
      getUrl = this.TVSHOW_BASEURL + url + '/' + query;
    } else {
      getUrl = this.TVSHOW_BASEURL + url;
    }
    return this.http.get(getUrl);
  }
}
