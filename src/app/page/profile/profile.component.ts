import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modelo/User';
import { AuthservicesService } from 'src/app/services/auth/authservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fullname ="";
  name = "";
  email = "";
  id = "";
  constructor(private service: AuthservicesService) {
    this.getlocalUser();
   }

  user: User = new User
  ngOnInit(): void {
    

  }

  getlocalUser() {
    let data = JSON.parse(localStorage.getItem('user')!);
    this.fullname = data.userData.fullname
    this.name = data.userData.firstName
    this.email = data.userData.email
    this.id = data.userData.id

    


  }





}
