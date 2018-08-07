import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl + '/user';

  constructor(private httpClient: HttpClient) { }

  updateOne(userData): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.put(`${this.baseUrl}/me`, userData, options)
      .toPromise();
  }

  getOne(userId): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.baseUrl}/${userId}`, options)
      .toPromise();
  }

  getAllApplicants(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/applicants`, options)
    .toPromise();
  }
}
