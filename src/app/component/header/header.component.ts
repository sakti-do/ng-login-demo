import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userToken:string = null;
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.userToken = localStorage.getItem('user_token');
  }
  logout(){
    localStorage.setItem('user_token','');
    this.router.navigate(['home']);
  }

}
