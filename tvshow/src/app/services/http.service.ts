import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private TVSHOW_BASEURL = 'https://api.tvmaze.com/';

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get Method to return an HTTP Observable Object to be used in components
   * @param path URL for the API call
   * @returns Returns an Observable Object
   */
  public get(path: string, query?: string) {
    let getUrl = '';

    // Changing the URL based on params
    if (query) {
      getUrl = this.TVSHOW_BASEURL + path + '/' + query;
    } else {
      getUrl = this.TVSHOW_BASEURL + path;
    }
    return this.http.get(getUrl);
  }
}
