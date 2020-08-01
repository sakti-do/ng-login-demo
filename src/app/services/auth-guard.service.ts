import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (!localStorage.getItem('user_token')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
