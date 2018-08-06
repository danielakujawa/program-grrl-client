import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = 'http://localhost:3000/auth';

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

  signup(username: string, password: string, userType: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = {username, password, userType};

    return this.httpClient.post(`${this.baseUrl}/signup`, data, options)
      .toPromise();
  }

  login(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = { username, password };

    return this.httpClient.post(`${this.baseUrl}/login`, data, options)
      .toPromise();
  }

  logout() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/logout`, null, options)
      .toPromise();
   }

  getUser(): any {
    return this.user;
  }

}
