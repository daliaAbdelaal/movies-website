import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  loginForm=new FormGroup ({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern(/^[a-z0-9]{3,9}$/),Validators.required])
  })
  
 submitLoginForm(loginForm:FormGroup)
  {
  //console.log(loginForm.value);
  
  this._AuthService.login(loginForm.value).subscribe((response)=>{

    // console.log(response);
    if(response.message=='success')
    {
      localStorage.setItem('token',response.token);
      this._Router.navigate(['./home']);
    }else
    {
      this.error=response.message
      this.loginForm.reset();
    }
   
  })
  
}
  
  ngOnInit(): void {
  }

}
