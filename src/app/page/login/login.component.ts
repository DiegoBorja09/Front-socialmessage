import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelo/User';
import { AuthservicesService } from 'src/app/services/auth/authservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private service:AuthservicesService){}
  ngOnInit(): void {
    
  }
  result={}
  user:User=new User
  //metodo del boton que nos redirecciona a el html de register
signup(){
  this.router.navigate(["register"])
}

login(){
  this.service.loginUser(this.user).subscribe(data=>{
    
  })
  console.log(this.result);
}
}
