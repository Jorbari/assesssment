import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private hhtClient: HttpClient) {

   }

   public SignInUser(payload): Observable<any> {

    // experiencing cors error but made a tweak to it
    const url = 'https://cors-anywhere.herokuapp.com/https://fcs.concept-nova.com/api/v1/login';

    return this.hhtClient.post(url, payload);

   }
}
