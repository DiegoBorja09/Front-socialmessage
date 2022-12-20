
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from './services/auth/authservices.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router:Router, private service:AuthservicesService){}
  navOpen=false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  Login(){
    this.router.navigate(["login"])
  }

  session_Active(){
    return this.service.gettoken();

  }

  logout(){
    return this.service.logOut();
  }

  OpenNavbar(){
    if(this.navOpen){
      this.navOpen=false;
    }else{
      this.navOpen=true;
    }

  }
}
