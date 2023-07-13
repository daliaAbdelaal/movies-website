import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenuItem:boolean=true;
  constructor(private _Router:Router) {

    let token=localStorage.getItem("token");
    if(token)
    {
      this.showMenuItem=true //mean user is loggedin
    }else{
      this.showMenuItem=false
    }
    
   }
  logOut()
  {
    localStorage.removeItem("token");
    this._Router.navigate(['./login']);
  }

  ngOnInit(): void {

  }

}
