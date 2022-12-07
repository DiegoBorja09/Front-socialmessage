
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from './services/auth/authservices.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router, private service:AuthservicesService){}

  Login(){
    this.router.navigate(["login"])
  }

  session_Active(){
    return this.service.gettoken();

  }

  logout(){
    return this.service.logOut();
  }
}
