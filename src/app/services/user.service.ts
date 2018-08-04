import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = 'http://localhost:3000/user';

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  // me(name: string): Promise<any> {
  //   const options = {
  //     withCredentials: true
  //   };
  //   const data = {name};

  //   return this.httpClient.post(`${this.baseUrl}/me`, data, options)
  //     .toPromise();
  // }

  homepage(): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/homepage`, options)
      .toPromise();
  }

  getUser(): any {
    return this.user;
  }
}
