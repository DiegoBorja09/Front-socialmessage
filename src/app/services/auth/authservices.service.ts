import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../Modelo/User';
import { BehaviorSubject, catchError, map, Observable, throwError, } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  private user = new BehaviorSubject<User>(null!);
  private token!: string;
  constructor(private http: HttpClient, private router: Router) { }


  url = "https://backdiego-production.up.railway.app/auth";

  get user$(): Observable<User> {
    return this.user.asObservable();
  }


  
  loginUser(user: User): Observable<User | void> {
    return this.http.post<User>(this.url + "/login", user).pipe(
      map((user: User) => {
        this.saveLocalStorage(user);
        this.saveToken(user.token);
        alert(user.message);
        this.router.navigate(['/profile'])
        this.user.next(user);
        return user;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  RegisterUser(user: User) {
    return this.http.post<User>(this.url + "/signup", user)
  };


  private saveLocalStorage(user: User): void {
    const { id, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }

  private saveToken(token: string): void {
    this.token = token;
    localStorage.setItem("token", token);
  }

  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = 'your email and password do not match';
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  gettoken() {
    return localStorage.getItem("token");
  }

  logOut() {
    this.token = "";
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/'])
  }


}
