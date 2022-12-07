import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Modelo/User';
import { AuthservicesService } from '../../services/auth/authservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private router:Router, private service:AuthservicesService){}
  ngOnInit(): void {
   
  }
  user:User=new User
  result={}
  register(){
    this.result=this.service.RegisterUser(this.user).subscribe(data=>{
      if(this.result){
        alert("user created successfully")
      }
      this.router.navigate(["login"])
    })
    
  }
}
