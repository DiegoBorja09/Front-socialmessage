import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/Modelo/Message';
import { MessageservicesService } from 'src/app/services/message/messageservices.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit{

  constructor(private router:Router, private servicesmessage:MessageservicesService ){}

  ngOnInit(): void {
    
  }
  message:Message=new Message

  save(){
    let data =JSON.parse(localStorage.getItem('user')!);
    this.message.iduser = data.userData.id
    this.servicesmessage.createmessage(this.message).subscribe(data=>{
      this.router.navigate(["allmessage"]);
    })
  }
}
