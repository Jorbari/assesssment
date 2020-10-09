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

    const url = 'https://fcs.concept-nova.com/api/v1/login';

    return this.hhtClient.post(url, payload);

   }
}
