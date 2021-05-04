import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from 'express';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(public jwtHelper: JwtHelperService) { }
  // // ...
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   // return !this.jwtHelper.isTokenExpired(token);
  //   return true;
  // }

  constructor(
    // public router: Router
  ) {

  }
  public isAuthenticated(): boolean {
    // console.log(this.router)
    console.log('isAuthenticated: false')
    return false;
    // if (this.router.route..queryParams['user']) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
  }
}
