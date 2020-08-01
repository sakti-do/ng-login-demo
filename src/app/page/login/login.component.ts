import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg:string = '';
  loginForm:FormGroup;
  constructor(private loginService:LoginService,private router:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required,Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {
  }
  login(){
    this.errorMsg = '';
    let res = this.loginService.userLogin(this.loginForm);
    if(res.data.hasOwnProperty('token')){
      localStorage.setItem('user_token',res.data['token']);
      this.router.navigate(['profile']);
    }
    /** below code is for api call with promise */
    // this.loginService.userLogin(this.loginForm).subscribe(
    //   res=>{
    //     localStorage.setItem('user_token',res.data['token']);
    //     this.router.navigate(['profile']);
    //   },
    //   err=>{
    //     this.errorMsg = 'Could not reach to server';
    //   },
    //   ()=>{}
    // );
  }

}
