import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Modelo/Message';
import { MessageservicesService } from 'src/app/services/message/messageservices.service';
import { AuthservicesService } from 'src/app/services/auth/authservices.service';

@Component({
  selector: 'app-allmessage',
  templateUrl: './allmessage.component.html',
  styleUrls: ['./allmessage.component.css']
})
export class AllmessageComponent implements OnInit{
 

  message: Message[]=[];
  constructor(private service: MessageservicesService, private user:AuthservicesService) {
    
  }
  
  ngOnInit(): void {
    this.getmessage()
   
  }

  getmessage(){
    this.service.getMessage().subscribe(data=>{
      this.message=data;
      console.log(this.message)
    });
  }

 
}
