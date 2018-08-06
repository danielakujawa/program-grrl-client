import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

  updateOne(userData): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.put(`${this.baseUrl}/me`, userData, options)
      .toPromise();
  }

}
