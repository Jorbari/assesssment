import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListOfSiteService {
  constructor(private hhtClient: HttpClient) {

  }

  getListOfSites(payload): Observable<any> {
   const url = `https://fcs.concept-nova.com/api/v1/sites/?token={token}`;

    return this.hhtClient.get(url);

  }

}
